import Footer from "../composant/footer";

export default function Noslieux() {
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
                                    <input type="text" id="prenom" name="prenom" />
                                </li>
                                <li className="nom">
                                    <label for="nom">Nom</label>
                                    <input type="text" id="nom" name="nom" />
                                </li>
                                <li className="tel">
                                    <label for="tel">Télephone</label>
                                    <input type="tel" id="tel" name="tel" />
                                </li>
                                <li className="email">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" />
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
                                <input class="btn__submit" type="submit" value="Réservation" />
                                <input class="btn__reset" type="button" value="Annuler" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}