import { Link } from "react-router-dom";
import Footer from "../composant/footer";
export default function Noslieux() {
    return (
        <div className="noslieux">
            <h2>Nos adresse et tarifs </h2>
            <div className="noslieux-text">
                <img src="/images/salle1.jpg" alt="" />
                <div className="class1">
                    <h3>Salle Horizon</h3>

                    <span className="para2">Prix premium: 2500$
                        avec un service traiteur et décoration<br></br>
                        Prix dela salle: 1500$<br></br>
                        Adresse: Q/craa, N°23, Ref/arrêt usine
                    </span>

                    <Link to="/contact">
                        <label htmlFor=""><input className="app-btn" type="submit" value="Réserver" /></label>
                    </Link>
                </div>


            </div>
            <div className="noslieux-text">
                <div className="class1">

                    <h3>Kfs traiteur</h3>

                    <span className="para">Consultez notre menu pour plus de détaille sur nos services.<br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum facere amet deleniti minus architecto dolor perspiciatis,
                        ad asperiores, harum in dignissimos natus sed beatae rerum exercitationem ipsam
                        aperiam ipsum! Quo.</span>
                    <Link to="/contact">
                        <label htmlFor=""><input className="app-btn" type="submit" value="Menu Kfs" /></label>
                    </Link>
                </div>
                <img src="images/buffet2.jpg" alt="" />
            </div>
            <div className="noslieux-text">
                <img src="images/espace verte.jpg" alt="" />
                <div className="class1">
                    <h3>Espace river</h3>

                    <span className="para2">Prix premium: 600$
                        avec un service de décoration<br></br>
                        Prix free: 300$<br></br>
                        Adresse: Q/Bel-air, N°456, Ref/la vallée
                    </span>

                    <Link to="/contact">
                        <label htmlFor=""><input className="app-btn" type="submit" value="Réserver" /></label>
                    </Link>

                </div>

            </div>

            <div className="noslieux-text">
                <div className="class1">
                    <h3>B-one image</h3>

                    <span className="para">Consultez notre  tarification pour la couverture de vos événement.<br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum facere amet deleniti minus architecto dolor perspiciatis,
                        ad asperiores, harum in dignissimos natus sed beatae rerum exercitationem ipsam
                        aperiam ipsum! Quo.
                    </span>

                    <Link to="/contact">
                        <label htmlFor=""><input className="app-btn" type="submit" value="Tarification" /></label>
                    </Link>
                </div>

                <img src="images/shoot2.jpg" alt="" />
            </div>
            <div className="noslieux-text">

                <img src="images/deco3.jpg" alt="" />
                <div className="class1">
                    <h3>Fair-déco</h3>

                    <span className="para2">Prix mariage: 500$<br></br>
                        Prix Dote: 300$<br></br>
                        Prix anniversaire: 200$<br></br>
                        Autres: 150$<br></br>
                        Adresse: Q/Bel-air, N°123, c/réf arrêt savonnier
                    </span>

                    <Link to="/contact">
                        <label htmlFor=""><input className="app-btn" type="submit" value="Réserver" /></label>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>




    )
}

