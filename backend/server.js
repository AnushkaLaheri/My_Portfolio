// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow your frontend domain
app.use(express.json()); // Parse JSON data

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Or any SMTP service like Outlook, Yahoo, or custom
    auth: {
      user: 'anushka.kumari.csbs27@heritageit.edu.in', // your Gmail address
      pass: 'your_app_password',    // Gmail App Password (not your main password!)
    }
  });

  const mailOptions = {
    from: email,
    to: 'your_email@gmail.com',
    subject: `New Message from ${name}`,
    text: `
      You have a new contact form submission:

      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
