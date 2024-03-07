import { Link } from "react-router-dom";

export default function Container2() {
    return (

        <div className="container2">
            <div className="container2-p">
                <h1>WinEvent's :</h1>
                <p><br></br> Est un site web événementielle , Spécialisés dans le luxe, nous<br></br>
                    proposons des lieux sur-mesure, selon votre événements . Nous <br></br>
                    mettons à votre disposition notre large choix de locations des <br></br>
                    salles de fête,espaces verte,services de décoration ,services <br></br>
                    traiteur  et shooting photo.<br></br>
                    Trouver un lieu  adapté pour organiser vos céremonie, n’a <br></br>
                    jamais été aussi simple.
                    Aussi simple que ces 2 mots qui définissent le concept<br></br>
                    WinEvent’s.</p>
                <Link to="decouvrez nos services">
                    <label htmlFor="decouvrez nos services"><input className="container2-btn" type="submit" value="Découvrez nos services" /></label>
                </Link>

            </div>

            <img className="container2-img" src="/images/fete.png" alt="" />
        </div>

    )
}