import { useState } from "react";
import { Link } from "react-router-dom"


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="header">
                <img src="/images/Rectangle 19(1).svg" alt="logo" />
                <div className="menu-icon" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`menu ${menuOpen ? "open" : ""}`}>
                    <Link className="underline" to="/" onClick={toggleMenu}>WinEvent'S</Link>
                    <Link className="underline" to="/accueil" onClick={toggleMenu}>Accueil</Link>
                    <Link className="underline" to="/apropos" onClick={toggleMenu}>Apropos</Link>
                    <Link className="underline" to="/services" onClick={toggleMenu}>Services</Link>
                    <Link className="underline" to="/noslieux" onClick={toggleMenu}>Noslieux</Link>
                    <Link className="underline" to="/contact" onClick={toggleMenu}>
                        <label for="contact"><input className="btn-header" type="submit" value="Contact" /></label></Link>
                </ul>
            </div>
        </>
    );
}
