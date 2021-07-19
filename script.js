function footerUpdate() {
    document.write(new Date().getFullYear())
}

function sendEmail() {
    
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    const button = document.getElementById('submitButton')

    
    Email.send({
        Host : "smtp.gmail.com",
        Username : "bruno.emailjs@gmail.com",
        Password : "clacle01",
        To : 'bruno.amorim032@gmail.com',
        From : "bruno.emailjs@gmail.com",
        Subject : `${name} te enviou uma mensagem pelo portfolio.`,
        Body : `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
    }).then(
        () => alert('E-mail enviado com sucesso!'),
        button.disabled = true
    );
}
