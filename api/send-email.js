import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, tradingExperience, interests } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: '"David Martin Riveros" <david@codify.capital>',
      to: email,
      subject: 'Welcome to Codify Capital!',
      html: `
        <h1>Welcome to Codify Capital!</h1>
        <p>Thank you for signing up! We're excited to have you join us.</p>
        <h2>Your Profile:</h2>
        <ul>
          <li>Trading Experience: ${tradingExperience}</li>
          <li>Interests: ${interests.join(', ')}</li>
        </ul>
        <p>We'll keep you updated with our latest developments and opportunities.</p>
        <br>
        <p>Best regards,</p>
        <p>David Martin Riveros<br>Codify Capital</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
} 