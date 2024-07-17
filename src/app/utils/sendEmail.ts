import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: process.env.MAILER_SERVICE,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
});

interface EmailBody {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export const sendMail = async (emailBody: EmailBody) => {
  const mailOptions = {
    from: emailBody.from,
    to: emailBody.to,
    subject: emailBody.subject,
    text: emailBody.text,
  };
  transporter
    .sendMail(mailOptions)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
};
