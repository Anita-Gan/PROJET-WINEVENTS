const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();
const bcrypt = require('bcryptjs')
const auth= require('../Controllers/authControllers.js')

router.post('/signup', auth.authController)


module.exports = router;