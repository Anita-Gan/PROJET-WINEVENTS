import { Link } from "react-router-dom";
import Footer from "../composant/footer";
export default function Noslieux() {
    return (
        <div className="noslieux">
            <h2>Nos adresse et tarifs </h2>
            <div className="noslieux-text">
                <img src="/images/salle1.jpg" alt="" />
                <h3>Salle Horizon</h3>

                <span>Prix = 2500$ y compris le service traiteur et décoration</span>
                <span>prix = 1500$ y compris le service de décoration</span>
                <span>Adresse : Lumumba N°123 ref Hopital Don Bosco</span>
                <Link to="/contact">
                    <label htmlFor=""><input className="app-btn" type="submit" value="Réservez" /></label>
                </Link>

            </div>
            <div className="noslieux-text">

                <h3>Salle Horizon</h3>

                <span>Prix = 2500$ y compris le service traiteur et décoration</span>
                <span>prix = 1500$ y compris le service de décoration</span>
                <span>Adresse : Lumumba N°123 ref Hopital Don Bosco</span>
                <Link to="/contact">
                    <label htmlFor=""><input className="app-btn" type="submit" value="Réservez" /></label>
                </Link>
                <img src="/images/cuisine.png" alt="" />
            </div>
            <div className="noslieux-text">
                <img src="/images/cuisine.png" alt="" />
                <h3>Salle Horizon</h3>

                <span>Prix = 2500$ y compris le service traiteur et décoration</span>
                <span>prix = 1500$ y compris le service de décoration</span>
                <span>Adresse : Lumumba N°123 ref Hopital Don Bosco</span>
                <Link to="/contact">
                    <label htmlFor=""><input className="app-btn" type="submit" value="Réservez" /></label>
                </Link>

            </div>

            <div className="noslieux-text">
               
                <h3>Salle Horizon</h3>

                <span>Prix = 2500$ y compris le service traiteur et décoration</span>
                <span>prix = 1500$ y compris le service de décoration</span>
                <span>Adresse : Lumumba N°123 ref Hopital Don Bosco</span>
                <Link to="/contact">
                    <label htmlFor=""><input className="app-btn" type="submit" value="Réservez" /></label>
                </Link>
                <img src="/images/cuisine.png" alt="" />
            </div>
            <div className="noslieux-text">
                <img src="/images/cuisine.png" alt="" />
                <h3>Salle Horizon</h3>

                <span>Prix = 2500$ y compris le service traiteur et décoration</span>
                <span>prix = 1500$ y compris le service de décoration</span>
                <span>Adresse : Lumumba N°123 ref Hopital Don Bosco</span>
                <Link to="/contact">
                    <label htmlFor=""><input className="app-btn" type="submit" value="Réservez" /></label>
                </Link>
            </div>
            <Footer/>
        </div>
        
 
    
       
    )
}

