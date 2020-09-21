const nodemailer = require("nodemailer");

exports.transport = function(
    mail_recipient,    
    mail_host,
    mail_port,
    mail_user,
    mail_pass,
    mail_from,
    mail_subject,
    mail_text,
    callback
    ) {
    var transporter = nodemailer.createTransport({
        host: mail_host,
        port: mail_port,
        auth: {
          user: mail_user,
          pass: mail_pass
        }
    });
      
    var mailOptions = {
        from: mail_from,
        to: mail_recipient,
        subject: mail_subject,
        text: mail_text
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          callback(false, error);
        } else {
          callback(true, info);
        }
    });
}