const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  try {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
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

    // Log request body
    console.log('Request body:', req.body);
    
    // Validate request body
    if (!req.body) {
      console.error('No request body');
      return res.status(400).json({ error: 'No request body' });
    }

    const { email, tradingExperience, interests } = req.body;

    // Validate required fields
    if (!email || !tradingExperience) {
      console.error('Missing required fields:', { email, tradingExperience });
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Log Resend API key (first 4 chars only)
    console.log('Resend API Key:', process.env.RESEND_API_KEY ? `${process.env.RESEND_API_KEY.substring(0, 4)}...` : 'Not set');

    // Prepare email data
    const emailData = {
      from: 'Codify Capital <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to Codify Capital!',
      html: `
        <h1>Welcome to Codify Capital!</h1>
        <p>Thank you for signing up! We're excited to have you join us.</p>
        <h2>Your Profile:</h2>
        <ul>
          <li>Trading Experience: ${tradingExperience}</li>
          <li>Interests: ${interests ? interests.join(', ') : 'None selected'}</li>
        </ul>
        <p>We'll keep you updated with our latest developments and opportunities.</p>
        <br>
        <p>Best regards,</p>
        <p>David Martin Riveros<br>Codify Capital</p>
      `
    };

    // Log email data
    console.log('Sending email with data:', { ...emailData, to: '***' });

    // Send email
    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ 
        error: 'Failed to send email',
        details: error.message,
        code: error.code
      });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code
    });
    
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message,
      type: error.name,
      code: error.code
    });
  }
}; 