function sendEmail() {

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value

    const button = document.getElementById('submitButton')

    Email.send({
        Host : "smtp.gmail.com",
        Username : "bruno.emailjs@gmail.com",
        Password : "clacle01",
        To : 'bruno.amorim032@gmail.com',
        From : "bruno.emailjs@gmail.com",
        Subject : `${name}: ${subject}`,
        Body : `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
    }).then(
        () => alert('E-mail enviado com sucesso!'),
        button.disabled = true
    );
}

const sum = (a, b) => {return a + b}

sum(1, 2)