import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

// Load environment variables from .env file in development
if (process.env.NODE_ENV !== 'production') {
  const { config } = await import('dotenv');
  config();
}

const app = express();
app.use(cors());
app.use(express.json());

// Log environment status (but not sensitive values)
console.log('Environment:', {
  NODE_ENV: process.env.NODE_ENV,
  EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not set',
  EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Not set'
});

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify email configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Welcome email template
const getWelcomeEmail = (userData) => {
  const interests = userData.interests.join(', ');
  
  return {
    subject: 'Welcome to Codify AI Backtesting!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #6d28d9;">Welcome to Codify AI Backtesting!</h1>
        
        <p>Thank you for joining our early access program. We're excited to have you on board!</p>
        
        <h2 style="color: #6d28d9;">Your Profile</h2>
        <ul>
          <li><strong>Experience Level:</strong> ${userData.tradingExperience}</li>
          <li><strong>Interests:</strong> ${interests}</li>
        </ul>
        
        <h2 style="color: #6d28d9;">What's Next?</h2>
        <p>Here's what you can expect:</p>
        <ol>
          <li>You'll receive exclusive updates about our platform development</li>
          <li>Early access to new features and tools</li>
          <li>Special onboarding session when we launch</li>
        </ol>
        
        <div style="margin-top: 30px; padding: 20px; background-color: #f3f4f6; border-radius: 8px;">
          <p style="margin: 0;"><strong>Questions?</strong> Just reply to this email - we're here to help!</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px;">
            Codify AI LLC<br>
            1021 E Lincolnway, Suite #6656<br>
            Cheyenne, Wyoming 82001<br>
            USA
          </p>
        </div>
      </div>
    `
  };
};

// Endpoint to handle signup
app.post('/api/signup', async (req, res) => {
  try {
    const userData = req.body;
    console.log('Received signup data:', userData);
    
    if (!userData.email) {
      throw new Error('Email is required');
    }

    // Send welcome email
    const { subject, html } = getWelcomeEmail(userData);
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userData.email,
      subject,
      html
    };

    console.log('Sending email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    // Store user data in database (to be implemented)
    // For now, just log it
    console.log('New signup:', userData);

    res.json({ success: true, message: 'Welcome email sent successfully' });
  } catch (error) {
    console.error('Error processing signup:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack
    });
    res.status(500).json({ 
      success: false, 
      message: 'Error processing signup',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 