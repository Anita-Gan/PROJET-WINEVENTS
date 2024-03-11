export default function Footer() {
    return (
        <div className="footer">
            
            <img  className="logo" src="/images/WinEvents.png" alt="" />
            <div className="footer-text">
               
                <div className="footer-svg">
                    <li className="Footer-svg-conctact">Contactez- nous:</li>
                    <p className="footer-phone">
                        <li> <img src="/images/phone-call-svgrepo-com.svg" alt="" /></li>
                        <li>+243970821352/+243993159583</li>
                    </p>
                    <p className="footer-mail">
                        <li><img src="/images/email-address-svgrepo-com.svg" alt="" /></li>
                        <li>anitaganenekulungu@gmail.com</li>
                    </p>
                </div>
                
            </div>
            <div className="footer-text2">
                <h2 className="footer-page">. Pages utiles</h2>
                <p>Nos lieux</p>
                <p>Services</p>
                
            </div>

        </div>
    )
}