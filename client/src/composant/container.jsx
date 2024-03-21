export default function Container() {
    return (

        <div className="container">
            <div className="container-tittle">
                <h1>WinEvent’s</h1>
                <p>Organise des événements dans des lieux uniques et sélectionnés avec soin<br></br> pour une clientèle haut de gamme. Plus de 200 adresses à découvrir.</p>
            </div>
          <select className="btn-1" name="TypeEvenement" id="">
            <option  value="" disabled selected>Type d’événement</option>
            <option value="">Mariage</option>
            <option value="">Anniversaire</option>
            <option value="">Dote</option>
            <option value="">cocktail</option>
            <option value="">anniversaire</option>
            <option value="">Conférence et Séminaire</option>
            <option value="">Séance photo et Tournage</option>
            <option value="">Réunion</option>
            </select>
            <select className="btn-2" name="TypeEvenement" id="">
            <option  value="" disabled selected>Type de lieu</option>
            <option value="">salle de fête</option>
            <option value="">Espace verte</option>
          </select>
          <select className="btn-3" name="TypeEvenement" id="">
            <option value="" disabled selected>Chercher</option>
            <option value="">salle de fête</option>
            <option value="">Service traiteur</option>
            <option value="">Espace verte</option>
            <option value="">Shooting Photo</option>
            <option value="">Service de décoration</option>
          </select>
          
        </div>

    )
}