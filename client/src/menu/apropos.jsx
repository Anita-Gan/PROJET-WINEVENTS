import { Link } from "react-router-dom";
import Footer from "../composant/footer";

export default function Apropos() {
    return (
        <div className="apropos">
            <div className="apropos-text">
                <h2><span className="color">Win</span><span className="color2">Event</span><span className="color3">’S</span></h2>
            </div>
            <div className="apropos-text2">
                <h2> WinEvent’s :</h2>

                <p> Est un site web événementielle ,
                    Spécialisés dans le luxe,<br></br> nous proposons des lieux sur-mesure,
                    selon votre événements . <br></br>Nous mettons à votre disposition notre large choix <br></br>
                    de locations des salles de fête,espaces verte,services de décoration ,<br></br>services traiteur  et
                    shooting photo.Trouver un lieu  adapté pour organiser vos céremonie, <br></br>n’a jamais été aussi
                    simple.<br></br>
                    Aussi simple que ces 2 mots
                    qui définissent le concept WinEvent’s.</p>
            </div>
            
            <div className="box">
                <div className="box-1">
                    <h3>Accompagnement</h3>
                </div>
                <div  className="box-2">
                    <h3>Sur-mesure</h3>
                </div>
                <div  className="box-3">
                    <h3>Professionnalisme</h3>
                </div>

            </div>

            <div className="app-text">
                <p className="app-text1" >Quel type  de location cherchez-vous ?</p>
                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br></br> Quasi mollitia exercitationem corrupti doloremque sequi, <br></br>ratione accusamus, ad laudantium quo voluptas nihil modi dolore minima qui,<br></br> error cupiditate! Vel, cumque inventore.</p>
                <Link to="/contact">
                    <label htmlFor=""><input className="app-btn" type="submit" value="Contactez-nous" /></label>
                </Link>

            </div>

            <Footer></Footer>


        </div>
    )
}