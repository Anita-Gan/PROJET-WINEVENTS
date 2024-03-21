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
            <div className="contact-forme">
                <form action="#">
                    <p>Vous pouvez aussi remplir ce formulaire :</p>
                    <span className="text-forme">Les champs marqués du signe <span className="color-red">* </span>sont obligatoires.</span>
                    <div>

                        <li className="contact-forme-input" >
                            <label htmlFor="">Nom</label>
                            <input type="text" />
                        </li>
                        <li className="contact-forme-input">
                            <label htmlFor="">Prénom</label>
                            <input  className="contact-forme-input" type="text" />
                        </li>
                        <li className="contact-forme-input">
                            <label htmlFor="">Email</label>
                            <input className="contact-forme-input" type="email" />
                        </li>
                        <li className="contact-forme-input">
                            <label htmlFor="">Télephone</label>
                            <input className="contact-forme-input" type="tel"/>
                        </li>
                        <li className="contact-forme-input">
                            <label htmlFor="">Type d’événement*</label>
                            <input className="contact-forme-input" type="text"/>
                        </li>
                        <li className="contact-forme-input">
                            <label htmlFor="">Type de lieux*</label>
                            <input className="contact-forme-input" type="text"/>
                        </li>
                        <li className="contact-forme-input">
                            <label htmlFor="">Réservation*</label>
                            <input className="contact-forme-input" type="text"/>
                        </li>
                        <li>
                            <input type="checkbox" id="scales" name="scales" checked />
                            <label for="scales">Je consens à ce que ce site  WinEvent’s stocke mes informations afin qu’il puisse répondre à ma requête.<span>*</span> </label>
                        </li>
                        <li className="contact-forme-input">
                            <label htmlFor=""></label>
                            <input  type="submit" />
                        </li>
                    </div>
                </form>
            </div >
            <Footer></Footer>
        </div>
    )
}