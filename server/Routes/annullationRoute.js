const express = require("express");
const router = express.Router();
const Annulationform = require('/home/user-24-c1/PROJET WINEVENTS/server/Controllers/annullationController.js');


router.delete("/annulation", function (req, res) {
    const index= req.params
    const { nom, prenom, email, telephone, typedevenement, typedelieu } = req.body;
    const deleteform = {
    nom,
    prenom,
    email,
    telephone,
    typedevenement,
    typedelieu
    };
    Annulation.splice(deleteform);
    res.json(Annulation);
   
  });

  
module.exports = router;