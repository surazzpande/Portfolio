# EmailJS Setup Instructions

To enable the contact form to send emails to your Gmail (surajpande20554@gmail.com), follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (surajpande20554@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Suraj,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply to: {{reply_to}}
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_abcdef123456`)

## 5. Update the Code
Replace these values in `src/pages/Contact.jsx`:

```javascript
const serviceId = 'your_service_id_here';        // Replace with your Service ID
const templateId = 'your_template_id_here';      // Replace with your Template ID  
const publicKey = 'your_public_key_here';        // Replace with your Public Key
```

## 6. Test the Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your Gmail inbox (surajpande20554@gmail.com) for the message

## Free Plan Limits
- 200 emails per month
- Perfect for portfolio contact forms
- No credit card required

## Security Note
The public key is safe to use in frontend code - it's designed for client-side use and has built-in rate limiting.