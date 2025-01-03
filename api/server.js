//server.js
const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 5000;

// Middleware to parse incoming JSON bodies
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Nodemailer setup for email transport (SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another email service like 'smtp.mailtrap.io'
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or App-specific password
  },
});

// POST route to handle form submission
app.post('/submit', (req, res) => {
  const { name, email, company, message } = req.body; // Get form data from req.body

  // Email setup
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address (your email)
    to: 'rajesh.feb142002@gmail.com', // Recipient address (the one receiving the form data)
    subject: 'New Form Submission', // Subject of the email
    text: `You have a new form submission:\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`, // Email body content
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error sending email', error });
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Form submitted and email sent successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
