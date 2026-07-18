const nodemailer = require('nodemailer');
const MyConstants = require('./MyConstants'); // Gọi file cấu hình của bạn vào đây

// Cấu hình lại transporter để dùng dịch vụ của Gmail và tài khoản trong MyConstants
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: MyConstants.EMAIL_USER,
    pass: MyConstants.EMAIL_PASS
  }
});

const EmailUtil = {
  send(email, id, token) {
    return new Promise(function (resolve, reject) {
      // Nội dung email dưới dạng văn bản thô
      const text = 'Thanks for signing up, please input these informations to activate your account:\n\t.id: ' + id + '\n\t.token: ' + token;
      
      const mailOptions = {
        from: MyConstants.EMAIL_USER,
        to: email,
        subject: 'Signup | Verification',
        text: text // Dùng thuộc tính text thay vì html
      };
      
      transporter.sendMail(mailOptions, function (err, result) {
        if (err) reject(err);
        resolve(true);
      });
    });
  }
};
module.exports = EmailUtil;