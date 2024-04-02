const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

exports.loginAuthController = async (req, res) => {

    try {
        const { email, password } = req.body;

        const existingUser = await prisma.user.findUnique({
            where: {email}
        })

        if (!existingUser) {
            return res.status(404).json({ error: "Utilisateur non trouvé" });
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: "Mot de passe incorrect" });
        } else {
            res.status(200).json({message: "l\'utilisateur connecté", user: {existingUser}})
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: "Une erreur s'est produite lors de l'authentification" });
    }
};
