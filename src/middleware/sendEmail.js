import * as nodemailer from "nodemailer";
//import dotenv from "dotenv";
import * as dotenv from 'dotenv';



async function sendMail(templateId, receiverEmail, token, name) {
    //dotenv.config();
    // Create a transporter with your SMTP configuration
    console.log(process.env.MAIL_PORT);
    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: process.env.MAIL_PORT,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    const mailOptions = emailTemplates(templateId, receiverEmail, token, name)
    // // Define the email options
    // const mailOptions = {
    //   from: "your_email_address",
    //   to: "recipient@example.com",
    //   subject: "Test Email from Nodemailer",
    //   text: "Hello from Nodemailer with TypeScript!",
    //   html: "<p>Hello from <b>Nodemailer</b> with <i>TypeScript</i>!</p>"
    // };

    // Send the email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.messageId);
    } catch (error) {
        console.error("Error occurred: " + error);
    }
}

function emailTemplates(templateId, receiverEmail, token, name) {
    
    var emailOptions = {
        from: '',
        to: '',
        subject: '',
        text: '',
    };


    //forgot password
    if (templateId == 2) {
        
        emailOptions = {
            from: process.env.MAIL_FROM_ADDRESS || 'fitspace',
            to: receiverEmail,
            subject: "Password Reset Token",
            text: `Hi ${name}, 
            We have received your request to reset your account password.
            Your password reset token is: ${token}
            To reset your password, enter the provided token in the password reset section within the app.
            If you did not request a password reset, no action is required. Your account remains secure.`
        };

    }

    return emailOptions;

}
export { sendMail }