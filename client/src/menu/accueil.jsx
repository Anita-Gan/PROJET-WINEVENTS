import Container from "../composant/container";
import Container2 from "../composant/container2";
import Container3 from "../composant/container3";
import Container4 from "../composant/container4";
import Image from 'client/src/composant/image.jsx'
import Footer from "../composant/footer";
import Conseiller from "../composant/conseiller";
import Container5 from "../composant/container5";

export default function Accueil() {
    return (
        <div className='container'>
            <Container />
            <Container3/>
            <Container2 />
            <Container3/>
            <Container5/>
            <Container3/>
            <Container4 />
            <Image/>
            <Container3/>
            <Conseiller/>
            
            <Footer></Footer>
        </div>
    )
}