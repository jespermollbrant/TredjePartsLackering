import {onRequest} from "firebase-functions/v2/https";
import {onDocumentUpdated, onDocumentCreated} from "firebase-functions/v2/firestore";
import {logger} from "firebase-functions";
import * as nodemailer from "nodemailer";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.json({result: "Hello from Firebase!"});
});

// Example function that can be called from your Next.js app
export const processQuote = onRequest((request, response) => {
  // Set CORS headers
  response.set('Access-Control-Allow-Origin', '*');
  response.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.set('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    response.status(204).send('');
    return;
  }

  if (request.method !== 'POST') {
    response.status(405).json({error: 'Method not allowed'});
    return;
  }

  try {
    const {name, email, message} = request.body;
    
    logger.info('Processing quote request', {
      name,
      email,
      message: message?.substring(0, 100) + '...'
    });

    // Here you would typically:
    // 1. Validate the input
    // 2. Store in Firestore
    // 3. Send email notification
    // 4. Process the quote request

    response.json({
      success: true,
      message: 'Quote request received successfully',
      quoteId: `quote_${Date.now()}`
    });
  } catch (error) {
    logger.error('Error processing quote', error);
    response.status(500).json({error: 'Internal server error'});
  }
});

// Email notification configuration
const emailTransporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to your preferred email service
  auth: {
    user: process.env.EMAIL_USER, // Set this in Firebase Functions config
    pass: process.env.EMAIL_PASSWORD, // Set this in Firebase Functions config
  },
});

// Function to send email notification
async function sendEmailNotification(
  subject: string,
  message: string,
  recipientEmail: string = process.env.NOTIFICATION_EMAIL || 'your-email@example.com'
) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: subject,
      html: `
        <h2>Database Update Notification</h2>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `,
    };

    await emailTransporter.sendMail(mailOptions);
    logger.info('Email notification sent successfully', {subject, recipientEmail});
  } catch (error) {
    logger.error('Failed to send email notification', error);
  }
}

// Database trigger functions for different collections
// Monitor quotes collection for updates
export const onQuoteUpdated = onDocumentUpdated(
  "quotes/{quoteId}",
  async (event) => {
    const beforeData = event.data?.before?.data();
    const afterData = event.data?.after?.data();
    const quoteId = event.params.quoteId;

    logger.info('Quote updated', {quoteId, beforeData, afterData});

    await sendEmailNotification(
      `Quote Updated - ${quoteId}`,
      `
        <p>A quote has been updated in your database.</p>
        <p><strong>Quote ID:</strong> ${quoteId}</p>
        <p><strong>Previous Data:</strong></p>
        <pre>${JSON.stringify(beforeData, null, 2)}</pre>
        <p><strong>New Data:</strong></p>
        <pre>${JSON.stringify(afterData, null, 2)}</pre>
      `
    );
  }
);

// Monitor quotes collection for new entries
export const onQuoteCreated = onDocumentCreated(
  "quotes/{quoteId}",
  async (event) => {
    const data = event.data?.data();
    const quoteId = event.params.quoteId;

    logger.info('New quote created', {quoteId, data});

    await sendEmailNotification(
      `New Quote Request - ${quoteId}`,
      `
        <p>A new quote request has been submitted.</p>
        <p><strong>Quote ID:</strong> ${quoteId}</p>
        <p><strong>Customer Name:</strong> ${data?.name || 'N/A'}</p>
        <p><strong>Email:</strong> ${data?.email || 'N/A'}</p>
        <p><strong>Message:</strong> ${data?.message || 'N/A'}</p>
        <p><strong>Full Data:</strong></p>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `
    );
  }
);

// Monitor any collection for updates (generic trigger)
export const onAnyDocumentUpdated = onDocumentUpdated(
  "{collection}/{documentId}",
  async (event) => {
    const collection = event.params.collection;
    const documentId = event.params.documentId;
    const beforeData = event.data?.before?.data();
    const afterData = event.data?.after?.data();

    // Skip if it's a system collection or if you don't want notifications for certain collections
    if (collection.startsWith('_') || collection === 'system') {
      return;
    }

    logger.info('Document updated', {collection, documentId, beforeData, afterData});

    await sendEmailNotification(
      `Database Update - ${collection}/${documentId}`,
      `
        <p>A document has been updated in your database.</p>
        <p><strong>Collection:</strong> ${collection}</p>
        <p><strong>Document ID:</strong> ${documentId}</p>
        <p><strong>Previous Data:</strong></p>
        <pre>${JSON.stringify(beforeData, null, 2)}</pre>
        <p><strong>New Data:</strong></p>
        <pre>${JSON.stringify(afterData, null, 2)}</pre>
      `
    );
  }
);

// Monitor any collection for new documents (generic trigger)
export const onAnyDocumentCreated = onDocumentCreated(
  "{collection}/{documentId}",
  async (event) => {
    const collection = event.params.collection;
    const documentId = event.params.documentId;
    const data = event.data?.data();

    // Skip if it's a system collection
    if (collection.startsWith('_') || collection === 'system') {
      return;
    }

    logger.info('New document created', {collection, documentId, data});

    await sendEmailNotification(
      `New Document Created - ${collection}/${documentId}`,
      `
        <p>A new document has been created in your database.</p>
        <p><strong>Collection:</strong> ${collection}</p>
        <p><strong>Document ID:</strong> ${documentId}</p>
        <p><strong>Data:</strong></p>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `
    );
  }
);
