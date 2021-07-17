function footerUpdate() {
    document.write(new Date().getFullYear())
}

function sendEmail(name, email, message) {
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : 'bruno.amorim032@gmail.com',
        From : "you@isp.com",
        Subject : `${name} te enviou uma mensagem pelo portfolio.`,
        Body : `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
    }).then(
      () => alert('E-mail enviado com sucesso!')
    );
}