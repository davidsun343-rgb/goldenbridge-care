# GoldenBridge Care Website

A professional website for elderly care services with integrated contact form functionality.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email Service (Resend)

1. Sign up for a free account at [Resend.com](https://resend.com)
2. Go to your [API Keys page](https://resend.com/api-keys)
3. Create a new API key
4. Copy the API key and add it to your `.env.local` file:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### 3. Domain Verification (Optional but Recommended)

To send emails from your custom domain (info@goldenbridgecare.ca):

1. In your Resend dashboard, go to Domains
2. Add your domain: `goldenbridgecare.ca`
3. Follow the DNS configuration instructions
4. Once verified, update the "from" address in `/src/app/api/contact/route.ts`

### 4. Run the Development Server
```bash
npm run dev
```

## Features

- **Contact Form**: Fully functional contact form that sends emails to info@goldenbridgecare.ca
- **Email Templates**: Professional HTML email templates with all form data
- **Form Validation**: Client-side and server-side validation
- **Success/Error Handling**: User-friendly feedback for form submissions
- **Mobile Responsive**: Works perfectly on all devices

## Contact Form Features

- Collects all necessary information for care consultations
- Sends formatted emails with:
  - Contact information
  - Services of interest
  - Urgency level
  - Additional messages
  - Quick action buttons (Reply via Email, Call Now)
- Shows success message after submission
- Handles errors gracefully

## Email Configuration

The contact form emails are sent to: **info@goldenbridgecare.ca**

All form submissions include:
- Full contact details
- Selected services
- Urgency timeframe
- Additional information
- Professional formatting for easy reading

## Support

For technical support or questions about the contact form functionality, please check the console logs for any errors and ensure your Resend API key is properly configured.
