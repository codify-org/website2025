const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'https://vercel.codify.com.co');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

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