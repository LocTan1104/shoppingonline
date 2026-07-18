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
      const mailOptions = {
        from: MyConstants.EMAIL_USER,
        to: email,
        subject: 'Signup | Verification',
        html: `<h2>Please click to <a href="http://localhost:3000/api/customer/active?id=${id}&token=${token}">here</a> to verify your account</h2>`
      };
      
      transporter.sendMail(mailOptions, function (err, result) {
        if (err) {
          console.error("Lỗi gửi mail: ", err);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
};

module.exports = EmailUtil;