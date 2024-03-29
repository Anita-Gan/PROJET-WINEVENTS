const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Contrôleur pour gérer la soumission du formulaire
exports.soumissionEmailController = async (req, res) => {
    const { nom, prenom, email, telephone, typedevenement,typedelieu,reservation, annulation } = req.body;

    try {
        // Configuration du transporteur SMTP pour l'envoi d'e-mails
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'anitaganenekulungu@gmail.com',
                pass: 'anita23***'
            }
        });

        // Options de l'e-mail
        const mailOptions = {
            from: email,
            to: 'anitaganenekulungu@gmail.com',
            subject: 'Vous avez reçu un message utilisateur de ' + prenom,
            text: `Nom: ${nom}\nPrénom: ${prenom}\nE-mail: ${email}\nTéléphone: ${telephone}\nTypedevenement: ${typedevenement}\nTypedelieu: ${typedelieu}\nRéservation: ${reservation}\nAnnulation: ${annulation} `
        };

        // Envoi de l'e-mail
        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail envoyé: ' + info.response);
        res.status(200).send('Message envoyé avec succès');
    } catch (error) {
        console.log(error);
        res.status(500).send('Erreur lors de l\'envoi du message');
    }
};
