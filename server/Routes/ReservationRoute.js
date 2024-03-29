const express = require("express");
const router = express.Router();


router.get("/reservation", function (req, res) {

  const { nom, prenom, email, telephone, typedevenement, typedelieu, reservation, annulation } = req.body;
  const reservationform = {
    nom,
    prenom,
    email,
    telephone,
    typedevenement,
    typedelieu
  };
  Reservation.splice(reservationform);
  res.json(Reservation);

});



module.exports = router;










