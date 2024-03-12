import Footer from "../composant/footer";

export default function Apropos() {
    return (
        <div className="apropos">
            <div className="apropos-text">
                <h2>WinEvent’S</h2>
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

            <p className="apropos-rect">
                <h2>Accompagnement</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit delectus porro consectetur voluptatum reiciendis, fugiat unde fuga magnam? Iste maxime exercitationem veniam quos fuga dolore doloremque, cumque hic officiis?</p>
            </p>
            <p className="apropos-rect2">
                <h2>Sur-mesure</h2>
            </p>

            <p className="apropos-rect3">
                <h2>Professionnalisme</h2>
            </p>
            <div className="app-text">
            <p className="app-text1" >Quel type  de location cherchez-vous ?</p>
            <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br></br> Quasi mollitia exercitationem corrupti doloremque sequi, <br></br>ratione accusamus, ad laudantium quo voluptas nihil modi dolore minima qui,<br></br> error cupiditate! Vel, cumque inventore.</p>

            <label  htmlFor=""><input className="app-btn" type="submit" value="Contactez-nous" /></label>
            </div>
            
            <Footer></Footer>


        </div>
    )
}