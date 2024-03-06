export default function Container() {
    return (

        <div className="container">
            <div className="container-tittle">
                <h1>WinEvent’s</h1>
                <p>Organise des événements dans des lieux uniques et sélectionnés avec soin<br></br> pour une clientèle haut de gamme. Plus de 200 adresses à découvrir.</p>
            </div>
            <div className="btn-container">
                <label for="contact"><input className="btn-1" type="submit" value="Type d’événement" /></label>
                <label for="contact"><input className="btn-2" type="submit" value="Type de lieux" /></label>
                <label for="contact"><input className="btn-3" type="submit" value="Chercher" /></label>
            </div>
        </div>

    )
}