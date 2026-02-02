import { NextRequest, NextResponse } from 'next/server';

interface TransferFormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  pharmacyName: string;
  pharmacyPhone: string;
  pharmacyAddress: string;
  medications: string;
  doctorName: string;
  doctorPhone: string;
  notes: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: TransferFormData = await request.json();

    // Validate required fields
    const requiredFields = [
      'firstName',
      'lastName',
      'dateOfBirth',
      'phone',
      'email',
      'address',
      'city',
      'state',
      'zip',
      'pharmacyName',
      'pharmacyPhone',
      'medications',
    ];

    for (const field of requiredFields) {
      if (!data[field as keyof TransferFormData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Format the email content
    const emailContent = `
New Prescription Transfer Request

===========================================
PATIENT INFORMATION
===========================================
Name: ${data.firstName} ${data.lastName}
Date of Birth: ${data.dateOfBirth}
Phone: ${data.phone}
Email: ${data.email}

Address:
${data.address}
${data.city}, ${data.state} ${data.zip}

===========================================
CURRENT PHARMACY
===========================================
Pharmacy Name: ${data.pharmacyName}
Pharmacy Phone: ${data.pharmacyPhone}
Pharmacy Address: ${data.pharmacyAddress || 'Not provided'}

===========================================
PRESCRIPTION DETAILS
===========================================
Medications:
${data.medications}

Doctor's Name: ${data.doctorName || 'Not provided'}
Doctor's Phone: ${data.doctorPhone || 'Not provided'}

===========================================
ADDITIONAL NOTES
===========================================
${data.notes || 'None'}

---
This request was submitted via the Cedar Pharmacy website.
    `.trim();

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      // Send email via Resend
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Cedar Pharmacy <onboarding@resend.dev>',
          to: ['info.cedarrx@gmail.com'],
          subject: `Prescription Transfer Request - ${data.firstName} ${data.lastName}`,
          text: emailContent,
          reply_to: data.email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Resend API error:', errorData);
        throw new Error('Failed to send email');
      }
    } else {
      // Log the submission for development/testing
      console.log('===========================================');
      console.log('PRESCRIPTION TRANSFER REQUEST (No email service configured)');
      console.log('===========================================');
      console.log(emailContent);
      console.log('===========================================');
      console.log('To enable email sending, add RESEND_API_KEY to your .env.local file');
      console.log('===========================================');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Transfer request submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing transfer request:', error);
    return NextResponse.json(
      { error: 'Failed to process transfer request' },
      { status: 500 }
    );
  }
}
