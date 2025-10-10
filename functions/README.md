# Firebase Functions

This directory contains Firebase Cloud Functions for the Industrilackering project.

## Setup

1. Make sure you have Firebase CLI installed (already done locally)
2. Install dependencies: `npm install`
3. Build the functions: `npm run build`

## Available Functions

### HTTP Functions
- `helloWorld`: A simple test function that returns "Hello from Firebase!"
- `processQuote`: Processes quote requests from the website

### Database Trigger Functions
- `onQuoteUpdated`: Sends email notification when a quote is updated
- `onQuoteCreated`: Sends email notification when a new quote is created
- `onAnyDocumentUpdated`: Sends email notification when any document is updated
- `onAnyDocumentCreated`: Sends email notification when any new document is created

## Email Notifications Setup

To receive email notifications when your database is updated:

1. **Set up email credentials** using Firebase Functions config:
   ```bash
   npx firebase functions:config:set email.user="your-email@gmail.com"
   npx firebase functions:config:set email.password="your-app-password"
   npx firebase functions:config:set notification.email="your-email@gmail.com"
   ```

2. **For Gmail users**: You'll need to use an App Password instead of your regular password:
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password for "Mail"
   - Use this App Password in the config

3. **Alternative email services**: You can modify the email configuration in `src/index.ts` to use other services like:
   - Outlook/Hotmail
   - Yahoo
   - Custom SMTP servers

## Development

- **Build**: `npm run build`
- **Watch mode**: `npm run build:watch`
- **Lint**: `npm run lint`
- **Local emulator**: `npm run serve`

## Deployment

Before deploying, make sure to:

1. Update the project ID in `.firebaserc` (replace "your-project-id" with your actual Firebase project ID)
2. Set up email configuration (see above)
3. Login to Firebase: `npx firebase login`
4. Deploy: `npm run deploy` or `npx firebase deploy --only functions`

## Usage

After deployment, your functions will be available at:
- `https://us-central1-your-project-id.cloudfunctions.net/helloWorld`
- `https://us-central1-your-project-id.cloudfunctions.net/processQuote`

The database trigger functions will automatically run when:
- Documents are created or updated in Firestore
- You'll receive email notifications for these changes

## Environment Variables

You can set environment variables for your functions using:
```bash
npx firebase functions:config:set someservice.key="THE API KEY"
```

Or use the newer approach with secrets:
```bash
npx firebase functions:secrets:set SECRET_NAME
```

## Testing Database Triggers

To test the database triggers:

1. Deploy the functions
2. Create or update a document in your Firestore database
3. Check your email for the notification
4. Check the Firebase Functions logs for debugging

## Customization

You can customize the notification functions by:
- Modifying the email templates in `sendEmailNotification`
- Adding filters to skip certain collections or document types
- Adding additional notification methods (SMS, Slack, etc.)
- Customizing the data included in notifications