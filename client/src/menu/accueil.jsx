import Container from "../composant/container";
import Container2 from "../composant/container2";
import Container3 from "../composant/container3";
import Container4 from "../composant/container4";
import Image from 'client/src/composant/image.jsx'
import Footer from "../composant/footer";
import Conseiller from "../composant/conseiller";

export default function Accueil() {
    return (
        <div className='container'>
            <Container />
            <Container2 />
            <Container3/>
            <Container4 />
            <Image/>
            <Conseiller/>
            <Footer></Footer>
        </div>
    )
}