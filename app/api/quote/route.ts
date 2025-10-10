import { NextRequest, NextResponse } from "next/server";
import { getFirebaseAdmin } from "@/lib/firebaseAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json({ error: "Expected multipart/form-data" }, { status: 400 });
    }

    const form = await req.formData();

    // Extract text fields
    const companyName = String(form.get("company-name") || "");
    const contactName = String(form.get("contact-name") || "");
    const contactRole = String(form.get("contact-role") || "");
    const contactEmail = String(form.get("contact-email") || "");
    const quantity = Number(form.get("quantity") || 0);
    const volumeHalfYear = Number(form.get("volume-half-year") || 0);
    const color = String(form.get("color") || "");
    const surfaceTreatmentType = String(form.get("surface-treatment-type") || "");
    const usage = String(form.get("usage") || "");
    const finishLevel = String(form.get("finish-level") || "");
    const qualityNeeds = String(form.get("quality-needs") || "");
    const maskingInfo = String(form.get("masking-info") || "");
    const pretreatment = String(form.get("pretreatment") || "");
    const deliveryDate = String(form.get("delivery-date") || "");
    const flexibility = String(form.get("flexibility") || "");
    const endCustomerDelivery = String(form.get("end-customer-delivery") || "");
    const endCustomerName = String(form.get("end-customer-name") || "");
    const endCustomerAddress = String(form.get("end-customer-address") || "");

    const { db, bucket } = getFirebaseAdmin();

    // Create a Firestore doc first to obtain an id
    const createdAt = new Date();
    const docRef = await db.collection("quotes").add({
      companyName,
      contactName,
      contactRole,
      contactEmail,
      quantity,
      volumeHalfYear,
      color,
      surfaceTreatmentType,
      usage,
      finishLevel,
      qualityNeeds,
      maskingInfo,
      pretreatment,
      deliveryDate,
      flexibility,
      endCustomerDelivery,
      endCustomerName,
      endCustomerAddress,
      createdAt,
    });

    // Upload files only if storage bucket is configured and available
    try {
      const files = form.getAll("drawing-upload");
      const annotationFiles = form.getAll("drawing-annotations");
      const uploadedFiles: { name: string; storagePath: string; publicUrl?: string; annotationUrl?: string }[] = [];
      if (bucket?.file && files.length > 0) {
        for (const file of files) {
          if (!(file instanceof File)) continue;
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          const storagePath = `quotes/${docRef.id}/${file.name}`;
          const gcsFile = bucket.file(storagePath);
          await gcsFile.save(buffer, {
            contentType: file.type || "application/octet-stream",
            resumable: false,
            metadata: {
              cacheControl: "public, max-age=31536000, immutable",
              contentDisposition: `inline; filename=\"${file.name}\"`,
            },
          });

          let publicUrl: string | undefined;
          try {
            const makePublic = String(process.env.MAKE_UPLOADS_PUBLIC || "").toLowerCase() === "true";
            if (makePublic) {
              await gcsFile.makePublic();
              const bucketName = bucket.name as string;
              publicUrl = `https://storage.googleapis.com/${bucketName}/${encodeURIComponent(storagePath)}`;
            } else {
              const [signedUrl] = await gcsFile.getSignedUrl({
                action: "read",
                expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
              });
              publicUrl = signedUrl;
            }
          } catch {}

          // find matching annotation by original name prefix
          let annotationUrl: string | undefined;
          const matchingAnnotation = annotationFiles.find((a) => a instanceof File && (a as File).name.startsWith(`${file.name}.annotated`)) as File | undefined;
          if (matchingAnnotation) {
            const ab = await matchingAnnotation.arrayBuffer();
            const b = Buffer.from(ab);
            const annPath = `quotes/${docRef.id}/${matchingAnnotation.name}`;
            const annFile = bucket.file(annPath);
            await annFile.save(b, {
              contentType: matchingAnnotation.type || "image/png",
              resumable: false,
              metadata: {
                cacheControl: "public, max-age=31536000, immutable",
                contentDisposition: `inline; filename=\"${matchingAnnotation.name}\"`,
              },
            });
            try {
              const makePublic = String(process.env.MAKE_UPLOADS_PUBLIC || "").toLowerCase() === "true";
              if (makePublic) {
                await annFile.makePublic();
                const bucketName = bucket.name as string;
                annotationUrl = `https://storage.googleapis.com/${bucketName}/${encodeURIComponent(annPath)}`;
              } else {
                const [signedUrl] = await annFile.getSignedUrl({
                  action: "read",
                  expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
                });
                annotationUrl = signedUrl;
              }
            } catch {}
          }

          const entry: { name: string; storagePath: string; publicUrl?: string; annotationUrl?: string } = { name: file.name, storagePath };
          if (publicUrl != null) entry.publicUrl = publicUrl;
          if (annotationUrl != null) entry.annotationUrl = annotationUrl;
          uploadedFiles.push(entry);
        }
      }
      if (uploadedFiles.length > 0) {
        await docRef.update({ files: uploadedFiles });
      }
    } catch (uploadErr) {
      console.warn("File upload skipped due to storage error:", uploadErr);
      // Continue without failing the whole request
    }

    return NextResponse.json({ id: docRef.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


