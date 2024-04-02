import { Link } from "react-router-dom";
import Footer from "../composant/footer";

export default function Services() {
    return (
        <div className="service">
            <div className="service-text">
                <h2>Services</h2>
            </div>
            <div className="service-text2">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quia dolorem dolores iure,<br></br>  quos ipsam numquam veritatis
                    alias quidem quisquam nemo animi facilis!<br></br> Animi repellendus
                    rem dolores nam et, optio in.</p>
            </div>
            <Link to="/noslieux">
            <div className="service-salle">
              <img src="/images/salle1.jpg" alt="" />
                <img src="/images/salle2.jpg" alt="" />
                <img src="/images/salle4.jpg" alt="" />
                <img src="/images/salle6.jpg" alt="" />
            </div>
            </Link> 
            <div className="service-span">
                <span>Salle horizon</span>
                <span>Salle rehema</span>
                <span>Salle prince</span>
                <span>Salle bella</span>
            </div>
            <Link to="/noslieux">
            <div className="service-traiteur">
                <img src="/images/buffet-traiteur.jpg" alt="" />
                <img src="/images/buffet2.jpg" alt="" />
                <img src="/images/buffet3.jpg" alt="" />
                <img src="/images/buffet4.jpg" alt="" />
            </div>
             </Link> 
            <div className="service-span">
                <span>Sg traiteur</span>
                <span>Grace services</span>
                <span>Delices de sandra</span>
                <span>Kfs traiteur</span>
            </div>
            <Link to="/noslieux">
            <div className="service-traiteur">
                <img src="/images/wooden-road-middle-forest.jpg" alt="" />
                <img src="/images/espace verte.jpg" alt="" />
                <img src="/images/city-park.jpg" alt="" />
                <img src="/images/city-park(1).jpg" alt="" />
            </div>
            </Link>
            <div className="service-span">
                <span>Espace safina</span>
                <span>Espace Eau-vive</span>
                <span>Espace river</span>
                <span>Espace maria</span>
            </div>
            <Link to="/noslieux">
            <div className="service-traiteur">
                <img src="/images/shoot1.jpg" alt="" />
                <img src="/images/shoot2.jpg" alt="" />
                <img src="/images/shoot3.jpg" alt="" />
                <img src="/images/shoot4.jpg" alt="" />
            </div>
            </Link>
            <div className="service-span">
                <span>Etoile shooting</span>
                <span>Aigle royal</span>
                <span>Taiga photographie</span>
                <span>B-one image</span>
            </div>
            <Link to="/noslieux">
            <div className="service-traiteur">
                <img src="/images/deco1.jpg" alt="" />
                <img src="/images/deco2.jpg" alt="" />
                <img src="/images/deco3.jpg" alt="" />
                <img src="/images/deco4.jpg" alt="" />
            </div>
            </Link>
            <div className="service-span">
                <span>New jus d’orange</span>
                <span>Fair-déco</span>
                <span>Bled decoration</span>
                <span>Tegra déco</span>
            </div>
            <Footer></Footer>
        </div>
    )
}

