"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onAnyDocumentCreated = exports.onAnyDocumentUpdated = exports.onQuoteCreated = exports.onQuoteUpdated = exports.processQuote = exports.helloWorld = void 0;
const https_1 = require("firebase-functions/v2/https");
const firestore_1 = require("firebase-functions/v2/firestore");
const firebase_functions_1 = require("firebase-functions");
const nodemailer = require("nodemailer");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.helloWorld = (0, https_1.onRequest)((request, response) => {
    firebase_functions_1.logger.info("Hello logs!", { structuredData: true });
    response.json({ result: "Hello from Firebase!" });
});
// Example function that can be called from your Next.js app
exports.processQuote = (0, https_1.onRequest)((request, response) => {
    // Set CORS headers
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.set('Access-Control-Allow-Headers', 'Content-Type');
    if (request.method === 'OPTIONS') {
        response.status(204).send('');
        return;
    }
    if (request.method !== 'POST') {
        response.status(405).json({ error: 'Method not allowed' });
        return;
    }
    try {
        const { name, email, message } = request.body;
        firebase_functions_1.logger.info('Processing quote request', {
            name,
            email,
            message: (message === null || message === void 0 ? void 0 : message.substring(0, 100)) + '...'
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
    }
    catch (error) {
        firebase_functions_1.logger.error('Error processing quote', error);
        response.status(500).json({ error: 'Internal server error' });
    }
});
// Email notification configuration
const emailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Set this in Firebase Functions config
    },
});
// Function to send email notification
async function sendEmailNotification(subject, message, recipientEmail = process.env.NOTIFICATION_EMAIL || 'your-email@example.com') {
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
        firebase_functions_1.logger.info('Email notification sent successfully', { subject, recipientEmail });
    }
    catch (error) {
        firebase_functions_1.logger.error('Failed to send email notification', error);
    }
}
// Database trigger functions for different collections
// Monitor quotes collection for updates
exports.onQuoteUpdated = (0, firestore_1.onDocumentUpdated)("quotes/{quoteId}", async (event) => {
    var _a, _b, _c, _d;
    const beforeData = (_b = (_a = event.data) === null || _a === void 0 ? void 0 : _a.before) === null || _b === void 0 ? void 0 : _b.data();
    const afterData = (_d = (_c = event.data) === null || _c === void 0 ? void 0 : _c.after) === null || _d === void 0 ? void 0 : _d.data();
    const quoteId = event.params.quoteId;
    firebase_functions_1.logger.info('Quote updated', { quoteId, beforeData, afterData });
    await sendEmailNotification(`Quote Updated - ${quoteId}`, `
        <p>A quote has been updated in your database.</p>
        <p><strong>Quote ID:</strong> ${quoteId}</p>
        <p><strong>Previous Data:</strong></p>
        <pre>${JSON.stringify(beforeData, null, 2)}</pre>
        <p><strong>New Data:</strong></p>
        <pre>${JSON.stringify(afterData, null, 2)}</pre>
      `);
});
// Monitor quotes collection for new entries
exports.onQuoteCreated = (0, firestore_1.onDocumentCreated)("quotes/{quoteId}", async (event) => {
    var _a;
    const data = (_a = event.data) === null || _a === void 0 ? void 0 : _a.data();
    const quoteId = event.params.quoteId;
    firebase_functions_1.logger.info('New quote created', { quoteId, data });
    await sendEmailNotification(`New Quote Request - ${quoteId}`, `
        <p>A new quote request has been submitted.</p>
        <p><strong>Quote ID:</strong> ${quoteId}</p>
        <p><strong>Customer Name:</strong> ${(data === null || data === void 0 ? void 0 : data.name) || 'N/A'}</p>
        <p><strong>Email:</strong> ${(data === null || data === void 0 ? void 0 : data.email) || 'N/A'}</p>
        <p><strong>Message:</strong> ${(data === null || data === void 0 ? void 0 : data.message) || 'N/A'}</p>
        <p><strong>Full Data:</strong></p>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `);
});
// Monitor any collection for updates (generic trigger)
exports.onAnyDocumentUpdated = (0, firestore_1.onDocumentUpdated)("{collection}/{documentId}", async (event) => {
    var _a, _b, _c, _d;
    const collection = event.params.collection;
    const documentId = event.params.documentId;
    const beforeData = (_b = (_a = event.data) === null || _a === void 0 ? void 0 : _a.before) === null || _b === void 0 ? void 0 : _b.data();
    const afterData = (_d = (_c = event.data) === null || _c === void 0 ? void 0 : _c.after) === null || _d === void 0 ? void 0 : _d.data();
    // Skip if it's a system collection or if you don't want notifications for certain collections
    if (collection.startsWith('_') || collection === 'system') {
        return;
    }
    firebase_functions_1.logger.info('Document updated', { collection, documentId, beforeData, afterData });
    await sendEmailNotification(`Database Update - ${collection}/${documentId}`, `
        <p>A document has been updated in your database.</p>
        <p><strong>Collection:</strong> ${collection}</p>
        <p><strong>Document ID:</strong> ${documentId}</p>
        <p><strong>Previous Data:</strong></p>
        <pre>${JSON.stringify(beforeData, null, 2)}</pre>
        <p><strong>New Data:</strong></p>
        <pre>${JSON.stringify(afterData, null, 2)}</pre>
      `);
});
// Monitor any collection for new documents (generic trigger)
exports.onAnyDocumentCreated = (0, firestore_1.onDocumentCreated)("{collection}/{documentId}", async (event) => {
    var _a;
    const collection = event.params.collection;
    const documentId = event.params.documentId;
    const data = (_a = event.data) === null || _a === void 0 ? void 0 : _a.data();
    // Skip if it's a system collection
    if (collection.startsWith('_') || collection === 'system') {
        return;
    }
    firebase_functions_1.logger.info('New document created', { collection, documentId, data });
    await sendEmailNotification(`New Document Created - ${collection}/${documentId}`, `
        <p>A new document has been created in your database.</p>
        <p><strong>Collection:</strong> ${collection}</p>
        <p><strong>Document ID:</strong> ${documentId}</p>
        <p><strong>Data:</strong></p>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `);
});
//# sourceMappingURL=index.js.map