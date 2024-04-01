const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;


// Middleware pour parser les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Route pour gérer la soumission du formulaire
app.post('/envoyer-message', (req, res) => {
    const { nom, email, sujet, message } = req.body;

    // Configuration du transporteur SMTP pour l'envoi d'e-mails
    const transporter = nodemailer.createTransport({
        service: 'ServiceDeMessagerie',
        auth: {
            user: 'votre_adresse_email@example.com',
            pass: 'votre_mot_de_passe'
        }
    });

    // Options de l'e-mail
    const mailOptions = {
        from: email,
        to: 'adresse-email-de-l-admin@example.com',
        subject: 'Nouveau message de contact - ' + sujet,
        text: `Nom: ${nom}\nE-mail: ${email}\n\n${message}`
    };

    // Envoi de l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erreur lors de l\'envoi du message');
        } else {
            console.log('E-mail envoyé: ' + info.response);
            res.status(200).send('Message envoyé avec succès');
        }
    });
});


app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});