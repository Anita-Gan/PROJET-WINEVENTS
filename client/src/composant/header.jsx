import { Link } from "react-router-dom"
export default function Header() {
    return (
        <>
        <img src="/Mes image et logo/Rectangle 19(1).svg" alt="logo" />
            <div className="header">
                
                <Link  className="underline" to="/apropos">Apropos</Link>
                <Link className="underline" to="/services">Services</Link>
                <Link className="underline" to="/noslieux">Noslieux</Link>
                <Link className="underline" to="/contact"> 
                <label for="contact"><input  className="btn-header" type="submit" value="Contact" /></label>  
                </Link>
               
            </div>
        </>
    )
}