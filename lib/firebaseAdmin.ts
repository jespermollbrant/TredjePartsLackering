import { applicationDefault, cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

type ServiceAccountConfig = {
  projectId: string;
  clientEmail: string;
  privateKey: string;
};

function getServiceAccountFromEnv(): ServiceAccountConfig | null {
  const projectId =
    process.env.FIREBASE_PROJECT_ID || process.env.GOOGLE_CLOUD_PROJECT || process.env.PROJECT_ID || undefined;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL || process.env.GOOGLE_CLIENT_EMAIL || undefined;

  // Try multiple sources for the private key
  let privateKeyRaw =
    process.env.FIREBASE_PRIVATE_KEY ||
    process.env.GOOGLE_PRIVATE_KEY ||
    process.env.FIREBASE_PRIVATE_KEY_BASE64 ||
    process.env.GOOGLE_PRIVATE_KEY_BASE64 ||
    undefined;

  if (!projectId || !clientEmail) return null;

  // If no direct env, try GOOGLE_APPLICATION_CREDENTIALS_JSON (raw JSON) or *_BASE64 containing the full JSON
  let privateKeyFromJson: string | null = null;
  const credsJsonRaw =
    process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON || process.env.FIREBASE_SERVICE_ACCOUNT_JSON || undefined;

  try {
    if (!privateKeyRaw && credsJsonRaw) {
      const parsed = JSON.parse(credsJsonRaw.trim());
      privateKeyFromJson = parsed.private_key as string | undefined || null;
    }
  } catch {}

  // Some environments store the entire JSON as base64
  if (!privateKeyRaw && !privateKeyFromJson) {
    const jsonB64 = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON_BASE64 || process.env.FIREBASE_SERVICE_ACCOUNT_JSON_BASE64;
    if (jsonB64) {
      try {
        const decoded = Buffer.from(jsonB64, "base64").toString("utf8");
        const parsed = JSON.parse(decoded);
        privateKeyFromJson = parsed.private_key as string | undefined || null;
      } catch {}
    }
  }

  // If the privateKey env variable contains the whole JSON
  if (privateKeyRaw && privateKeyRaw.trim().startsWith("{")) {
    try {
      const parsed = JSON.parse(privateKeyRaw.trim());
      privateKeyFromJson = parsed.private_key as string | undefined || null;
      // Clear raw so we use the parsed value below
      privateKeyRaw = undefined;
    } catch {}
  }

  let privateKey = privateKeyFromJson || privateKeyRaw || undefined;
  if (!privateKey) return null;

  // If the key is base64 (common in CI), decode it first
  const looksBase64 = /^[A-Za-z0-9+/=\n\r]+$/.test(privateKey) && !privateKey.includes("BEGIN PRIVATE KEY");
  if (looksBase64) {
    try {
      const decoded = Buffer.from(privateKey, "base64").toString("utf8");
      if (decoded.includes("BEGIN PRIVATE KEY")) {
        privateKey = decoded;
      }
    } catch {}
  }

  // Normalize common formatting issues: strip surrounding quotes, fix escaped newlines, remove stray \r
  privateKey = privateKey.trim();
  if ((privateKey.startsWith("\"") && privateKey.endsWith("\"")) || (privateKey.startsWith("'") && privateKey.endsWith("'"))) {
    privateKey = privateKey.slice(1, -1);
  }
  privateKey = privateKey.replace(/\\n/g, "\n").replace(/\r/g, "");

  return { projectId, clientEmail, privateKey };
}

export function getFirebaseAdmin() {
  const existing = getApps()[0] ?? null;
  const app =
    existing ??
    initializeApp(
      (() => {
        const sa = getServiceAccountFromEnv();
        const storageBucket = process.env.FIREBASE_STORAGE_BUCKET?.trim();
        if (sa) {
          return {
            credential: cert({
              projectId: sa.projectId,
              clientEmail: sa.clientEmail,
              privateKey: sa.privateKey,
            }),
            // Only set storageBucket if provided; avoids implicit defaults that may not exist
            ...(storageBucket ? { storageBucket } : {}),
          } as any;
        }
        return {
          credential: applicationDefault(),
          ...(storageBucket ? { storageBucket } : {}),
        } as any;
      })()
    );

  const db = getFirestore(app);
  const storage = getStorage(app);
  const configuredBucketName = process.env.FIREBASE_STORAGE_BUCKET?.trim();
  // Only return a bucket instance if we have a configured bucket name
  const bucket = configuredBucketName ? storage.bucket(configuredBucketName) : null as any;

  return { app: getApp(), db, bucket };
}


