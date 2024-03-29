const express = require("express");
const router = express.Router();
const soumissionform = require('/home/user-24-c1/PROJET WINEVENTS/server/Controllers/EmailController.js');


router.post('/soumission', soumissionform.soumissionEmailController  )


module.exports = router;