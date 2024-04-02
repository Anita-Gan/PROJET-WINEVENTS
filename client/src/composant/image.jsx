import { Link } from "react-router-dom";

export default function Image() {

    return (
        <div className="image">
            
            <Link to='/services'><img src="/images/espace verte.jpg" alt="" /><li>Voir plus +</li></Link>
            <Link to='/services'><img src="/images/cuisine.png" alt="" /><li>Voir plus +</li></Link>
            <Link to='/services'><img src="/images/mr.jpg" alt="" /><li>Voir plus +</li></Link>
            <div>
            
            </div>
            

        </div>
    )
}