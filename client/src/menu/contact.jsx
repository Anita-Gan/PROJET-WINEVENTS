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
                <span>Nous vous répondons par téléphone :</span>
                <p>Tél: +243970821352</p>
                <p>Tél: +243993260583</p>
            </div>
            <div className="contact-forme">
                <form action="#">
                    <p>Vous pouvez aussi remplir ce formulaire :</p>
                    <span>Les champs marqués du signe <span>* </span>sont obligatoires.</span>
                    <div>

                        <li>
                            <label htmlFor=""></label>
                            <input type="text" value="Nom"/>
                        </li>
                        <li>
                            <label htmlFor=""></label>
                            <input type="text" value="Prénom"/>
                        </li>
                        <li>
                            <label htmlFor=""></label>
                            <input type="email" value="Email"/>
                        </li>
                        <li>
                            <label htmlFor=""></label>
                            <input type="tel" value="Télephone"/>
                        </li>
                        <li>
                            <label htmlFor=""></label>
                            <input type="text" value="Type d’événement*"/>
                        </li>
                        <li>
                            <label htmlFor=""></label>
                            <input type="text" value="Type de lieux*"/>
                        </li>
                        <li><label htmlFor=""></label>
                            <input type="text"value="Réservation*" />
                        </li>
                        <li>
                            <input type="checkbox" id="scales" name="scales" checked />
                            <label for="scales">Je consens à ce que ce site  WinEvent’s stocke mes informations afin qu’il puisse répondre à ma requête.<span>*</span> </label>
                        </li>
                        <li>
                            <label htmlFor=""></label>
                            <input type="submit" />
                        </li>
                    </div>
                </form>
            </div >
            <Footer></Footer>
        </div>
    )
}