# Google Ads Conversion Tracking Setup

## Thank You Page URL
The thank you page is now available at: `https://www.3plackering.com/tack`

This is the URL you should use in your Google Ads campaign setup for form submission tracking.

## Google Ads Setup Instructions

### 1. In Google Ads Dashboard:
1. Go to **Tools & Settings** > **Conversions**
2. Click **+ New conversion action**
3. Choose **Website** as the source
4. Select **Submit lead form** as the category
5. Enter the conversion name: "Offertförfrågan"
6. Set the **Conversion value** (recommended: 100-500 SEK depending on your average deal size)
7. Set **Count** to "One" (since each form submission should count as one conversion)
8. Set **Conversion window** to 30 days
9. Set **View-through conversion window** to 1 day
10. In **Attribution model**, choose "Last click"

### 2. Conversion URL Setup:
- **Enter the URL that someone reaches after they successfully fill out a form**: `https://www.3plackering.com/tack`
- **Set up manually using code after you create the campaign**: Choose this option

### 3. Install Conversion Tracking Code:

After creating the conversion action, Google will provide you with a conversion tracking code. You need to:

1. **Get your conversion ID and label** from Google Ads
2. **Update the thank you page** with your actual conversion tracking code

#### Option A: Global Site Tag (gtag.js) - Recommended
Add this to your website's `<head>` section (in `app/layout.tsx`):

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-CONVERSION_ID');
</script>
```

#### Option B: Update the Thank You Page
In `/app/tack/page.tsx`, replace the placeholder conversion tracking code:

```javascript
// Replace this line:
'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with your actual conversion ID and label

// With your actual conversion ID and label:
'send_to': 'AW-123456789/AbC-D_efG-HiJ_KlM', // Your actual values from Google Ads
```

### 4. Test the Conversion Tracking:

1. **Submit a test form** on your website
2. **Check Google Ads** - conversions should appear within 3-24 hours
3. **Use Google Tag Assistant** to verify the tracking code is firing correctly

### 5. Additional Optimization:

- **Enhanced Conversions**: Consider setting up Enhanced Conversions for better attribution
- **Conversion Value**: Adjust the conversion value based on your actual lead value
- **Conversion Window**: Monitor and adjust based on your sales cycle

## Important Notes:

- The thank you page includes a reference number display for better user experience
- The page is optimized for conversion tracking with proper event firing
- All form submissions will redirect to `/tack` with the quote ID as a URL parameter
- The page includes clear next steps and contact information to maintain user engagement

## Troubleshooting:

If conversions aren't tracking:
1. Verify the conversion ID and label are correct
2. Check that the thank you page URL matches exactly
3. Ensure the gtag script is loaded before the conversion event
4. Test with Google Tag Assistant
5. Check browser console for any JavaScript errors
