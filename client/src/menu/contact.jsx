import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [NameError, setNameError] = useState('');
    const [EmailError, setEmailError] = useState('');

    const nameValid = (value) => {
        console.log(value)
        if (value.trim().length < 3 || value.trim().length > 20) {
            setNameError("Le nom doit contenir entre 3 et 20 caractères");
        } else {
            setNameError("");
        }
    };

    const emailValid = (value) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(value)) {
                setEmailError("Entrez un email valide");
            } else {
                setEmailError("");
            }
    };

    const addUser = async () => {
        try {
            const response = await axios.post('http://localhost:3000/user/signup', {
                name: name,
                email: email,
                password: password
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="contact">
            <div className="contact-text">
                <h2>Contact</h2>
            </div>
            <div className="contact-text2">
                <p>Nous sommes à disposition pour vous accompagner dans<br></br>
                    vos recherches et vous proposer des services de <br></br>
                    qualité pour votre événement.<br></br>
                    N’hésitez pas à nous contacter !</p>
                <p className="text3">Nous vous répondons par téléphone :</p>
                <p className="text4">Tél: +243970821352</p>
                <p className="text4">Tél: +243993260583</p>
            </div>
            <div id="container">
                <div className="boxContact">
                    <form className="formContact" onSubmit={(e) => { e.preventDefault(); addUser(); }}>
                        <h2>Vous pouvez aussi remplir ce formulaire :</h2>
                        <div>
                            <ul>
                                <li className="nom">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" error={NameError} placeholder="Votre nom..." value={name} onChange={(e) => { setName(e.target.value); nameValid(e.target.value); }} />
                                    <p>{NameError}</p>
                                </li>
                                <li className="email">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" error={EmailError} placeholder="Votre adresse email..." value={email} onChange={(e) => { setEmail(e.target.value); emailValid(e.target.value); }} />
                                    <p>{EmailError}</p>
                                </li>
                                <li className="tel">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" placeholder="Votre mot de passe..." />
                                </li>
                                <select name="TypeEvenement" id="select" className="select">
                                    <option value="" disabled selected>Type d’événement</option>
                                    <option value="Mariage">Mariage</option>
                                    <option value="Anniversaire">Anniversaire</option>
                                    <option value="Dote">Dote</option>
                                    <option value="Cocktail">Cocktail</option>
                                    <option value="Conférence et Séminaire">Conférence et Séminaire</option>
                                   
                                </select>
                                <select name="TypeDeLieu" id="select" className="select">
                                    <option value="" disabled selected>Type de lieu</option>
                                    <option value="Salle de fête">Salle de fête</option>
                                    <option value="Espace verte">Espace verte</option>
                                   
                                </select>
                            </ul>
                            <div className="btns">
                                <input className="btn__submit" type="submit" value="Réservation" onSubmit={(e) => { e.preventDefault(); addUser(); }}/>
                                <input className="btn__reset" type="reset" value="Annuler" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
