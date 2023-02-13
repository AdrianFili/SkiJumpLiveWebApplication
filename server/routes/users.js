const router = require("express").Router()

const { User, validate } = require("../models/user")
const { Wynik, validate2 } = require("../models/wyniki")
const bcrypt = require("bcrypt")

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body)
        if (error)
            return res.status(400).send({ message: error.details[0].message })
        const user = await User.findOne({ email: req.body.email })
        if (user)
            return res
                .status(409)
                .send({ message: "Użytkownik o takim emailu istnieje!" })
        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        await new User({ ...req.body, password: hashPassword }).save()
        res.status(201).send({ message: "Utworzono użytkownika" })
    } catch (error) {
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
})
router.post("/save", async (req, res) => {
    const { error } = validate2(req.body)
    try {
        const { error } = validate2(req.body)
        if (error)
            return res.status(400).send({ message: error.details[0].message })
        
        await new Wynik({ ...req.body}).save()
        res.status(201).send({ message: "Utworzono rekord" })
    } catch (error) {
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
})

module.exports = router