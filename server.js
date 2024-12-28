import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/send-email', async (req, res) => {
  try {
    const { email, tradingExperience, interests } = req.body;

    const mailOptions = {
      from: `"David Martin Riveros" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Codify AI Backtesting!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6d28d9;">Welcome to Codify AI Backtesting!</h1>
          
          <p>Thank you for joining our early access program. We're excited to have you on board!</p>
          
          <h2 style="color: #6d28d9;">Your Profile</h2>
          <ul>
            <li><strong>Experience Level:</strong> ${tradingExperience}</li>
            <li><strong>Interests:</strong> ${interests.join(', ')}</li>
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
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 