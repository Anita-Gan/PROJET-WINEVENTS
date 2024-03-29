import { useState } from "react";
import Footer from "../composant/footer";


export default function Contact(props) {
const [prenom, setPrenom] = useState('');
const [PrenomError, setPrenomError] = useState('');
const [nom, setNom] = useState('');
const [NomError, setNomError] = useState('');
const [tel, setTel] = useState('');
const [TelError, setTelError] = useState('');
const [email, setEmail] = useState('');
const [EmailError,setEmailError] = useState('');
const [reservation,setReservation] = useState('');
const [annuler,setAnnulation] = useState('');

// validation prenom
const prenomValid = (value) => {
   
    if (value.trim().length < 3 || value.trim().length > 20) {
        setPrenomError("Le prénom doit contenir entre 3 et 20 caractères");
    } else {
        setPrenomError("");
    }
};
    // validation du nom 
    const nomValid = (value) => {
        console.log(value)
        if (value.trim().length < 3 || value.trim().length > 20) {
            setNomError("Le nom doit contenir entre 3 et 20 caractères");
        } else {
            setNomError("");
        }
    };
      // validation du email 
      const emailValid = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) {
            setEmailError("Entrez un email valide");
        } else {
            setEmailError("");
        }
    };  

    //validation du numéro de télephone 
    const telValid = (value) => {
        const airtelNumber = /^(\+243)?(\s|-)?(99|97|98)\d{7}$/;
        const vodacomNumber = /^(\+243)?(\s|-)?(82|81|80)\d{7}$/;
        const orangeNumber = /^(\+243)?(\s|-)?(83|84|85|89)\d{7}$/;
        const africellNumber = /^(\+243)?(\s|-)?(90|91)\d{7}$/;
    
        if (!airtelNumber.test(value) && !vodacomNumber.test(value) && !orangeNumber.test(value) && !africellNumber.test(value)) {
           setTelError("Entrez un numéro de téléphone valide ");
        } else {
            setTelError("");
        }
    };

// validation du btn reservation 

const reservationValid = (value) => {
    const nomValid = (value) => {
        console.log(value)
        if (value.trim().length < 3 || value.trim().length > 20) {
            setNomError("Le nom doit contenir entre 3 et 20 caractères");
        } else {
            setNomError("");
        }
    };
};  

// validation du btn reservation

const annulationValid = (contactElement, index) => {
        contactElement.closest(".btn__reset").remove();
        formContact.splice(index, 1);
        const tabString = JSON.stringify(formContact);
        window.localStorage.setItem('formContact', tabString);
};  


    return (
        <div className="contact">
            <div className="contact-text">
                <h2>Contact</h2>
            </div>
            <div className="contact-text2">
                <p>Nous sommes disposition pour vous accompagner dans<br></br>
                    vos recherche et vous proposer des services de <br></br>
                    qualités pour votre évènement.<br></br>
                    N’hésitez pas à nous contacter !</p>
                <p className="text3">Nous vous répondons par téléphone :</p>
                <p className="text4">Tél: +243970821352</p>
                <p className="text4">Tél: +243993260583</p>

            </div>
           
            <div id="container">
                <div className="boxContact">
                    <form className="formContact" action="#">
                        <h2>Vous pouvez aussi remplir ce formulaire :</h2>
                        <div>
                            <ul>
                                <li className="prenom">
                                    <label for="prenom">Prénom</label>
                                    <input type="text" id="prenom" name="prenom" error={PrenomError} placeholder="votre prénom..." value={prenom} onChange={(e) => {
                                       e.preventDefault();
                                       setPrenom(e.target.value);
                                        prenomValid(e.target.value);
                                    }}/> 
                                    <p>{PrenomError}</p>
                                </li>
                                <li className="nom">
                                    <label for="nom">Nom</label>
                                    <input type="text" id="nom" name="nom" error={NomError} placeholder="votre nom..." value={nom} onChange={(e) => {
                                       e.preventDefault();
                                       setNom(e.target.value);
                                        nomValid(e.target.value);
                                    }}/>
                                    <p>{NomError}</p>
                                </li>
                                <li className="tel">
                                    <label for="tel">Télephone</label>
                                    <input type="tel" id="tel" name="tel" error={TelError} placeholder="votre numéro..." value={tel} onChange={(e) => {
                                       e.preventDefault();
                                       setTel(e.target.value);
                                        telValid(e.target.value);
                                    }}/>
                                    <p>{TelError}</p>
                                </li>
                                <li className="email">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" error={EmailError} placeholder="votre adresse email..." value={email} onChange={(e) => {
                                       e.preventDefault();
                                       setEmail(e.target.value);
                                        emailValid(e.target.value);
                                    }}/>
                                    <p>{EmailError}</p>
                                </li>
                                <select  name="TypeEvenement" id="">
                                    <option value="" disabled selected>Type d’événement</option>
                                    <option value="">Mariage</option>
                                    <option value="">Anniversaire</option>
                                    <option value="">Dote</option>
                                    <option value="">cocktail</option>
                                    <option value="">anniversaire</option>
                                    <option value="">Conférence et Séminaire</option>
                                    <option value="">Séance photo et Tournage</option>
                                    <option value="">Réunion</option>
                                </select>
                                <select  name="TypeDeLieu" id="">
                                    <option value="" disabled selected>Type de lieu</option>
                                    <option value="">salle de fête</option>
                                    <option value="">Espace verte</option>
                                </select>
                            </ul>
                            <div className="btns">
                                <input className="btn__submit" type="submit" value="Réservation"  onClick={(e) => {
                                       e.preventDefault();
                                       setReservation(e.target.contactElement, index);
                                        reservationValid(e.target.value);
                                    }}/>
                                <input className="btn__reset" type="button"  value="annuler" onClick={(e) => {
                                       e.preventDefault();
                                       setAnnulation(e.target.contactElement, index);
                                        annulationValid(e.target.value);
                                    }}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}