import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      relationship,
      services,
      urgency,
      message,
      consent
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !consent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format services array for email
    const selectedServices = Array.isArray(services) 
      ? services.join(', ') 
      : services || 'Not specified';

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">GoldenBridge Care - Forward to info@goldenbridgecare.ca</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="color: #374151; margin-top: 0;">Contact Information</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 30%;">Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                  <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                  <a href="tel:${phone}" style="color: #4f46e5; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Relationship:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${relationship || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Urgency:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${urgency || 'Not specified'}</td>
              </tr>
            </table>
            
            <h3 style="color: #374151; margin: 25px 0 15px 0;">Services Interested In:</h3>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid #4f46e5;">
              <p style="margin: 0; color: #374151;">${selectedServices}</p>
            </div>
            
            ${message ? `
              <h3 style="color: #374151; margin: 25px 0 15px 0;">Additional Information:</h3>
              <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid #059669;">
                <p style="margin: 0; color: #374151; white-space: pre-wrap;">${message}</p>
              </div>
            ` : ''}
          </div>
          
          <div style="text-align: center; margin-top: 25px; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h3 style="color: #dc2626; margin: 0 0 10px 0;">⚡ Quick Actions</h3>
            <p style="margin: 0 0 15px 0; color: #6b7280;">Respond to this inquiry promptly for best customer service</p>
            <div style="display: inline-block; margin: 0 10px;">
              <a href="mailto:${email}" style="background: #4f46e5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;">Reply via Email</a>
            </div>
            <div style="display: inline-block; margin: 0 10px;">
              <a href="tel:${phone}" style="background: #059669; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;">Call Now</a>
            </div>
          </div>
        </div>
        
        <div style="background: #374151; color: #9ca3af; text-align: center; padding: 20px;">
          <p style="margin: 0; font-size: 14px;">This form was submitted from goldenbridgecare.ca</p>
          <p style="margin: 5px 0 0 0; font-size: 12px;">GoldenBridge Care - Compassionate Elderly Care Services</p>
        </div>
      </div>
    `;

    // Send email using Resend
    let emailResult;
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'your_resend_api_key_here') {
      const { data, error } = await resend.emails.send({
        from: 'GoldenBridge Care Contact Form <onboarding@resend.dev>',
        to: ['davidsun343@gmail.com'],
        subject: `New Contact Form Submission - ${firstName} ${lastName}`,
        html: emailHtml,
        replyTo: email,
      });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
          { error: 'Failed to send email' },
          { status: 500 }
        );
      }
      emailResult = data;
    } else {
      // Development mode - log email content instead of sending
      console.log('=== EMAIL PREVIEW (Development Mode) ===');
      console.log('TO:', 'info@goldenbridgecare.ca');
      console.log('FROM:', 'GoldenBridge Care Contact Form <noreply@goldenbridgecare.ca>');
      console.log('SUBJECT:', `New Contact Form Submission - ${firstName} ${lastName}`);
      console.log('REPLY TO:', email);
      console.log('FORM DATA:', {
        firstName,
        lastName,
        email,
        phone,
        relationship,
        services: selectedServices,
        urgency,
        message
      });
      console.log('=== END EMAIL PREVIEW ===');
      emailResult = { id: 'dev-mode-' + Date.now() };
    }

    return NextResponse.json(
      { 
        message: 'Form submitted successfully', 
        id: emailResult?.id,
        mode: process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'your_resend_api_key_here' ? 'production' : 'development'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}