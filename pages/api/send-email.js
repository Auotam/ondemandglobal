import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, email, message } = req.body;

    // Create a transporter object
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: email,
        to: 'your-email@example.com', // Replace with your email address
        subject: 'New Support Query',
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
      });

      // Send a thank you email to the user
      await transporter.sendMail({
        from: 'your-email@example.com', // Replace with your email address
        to: email,
        subject: 'Thank you for your query',
        text: 'Thank you for reaching out to us. We will get back to you shortly.',
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
