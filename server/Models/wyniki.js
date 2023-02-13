const mongoose = require("mongoose")
const int16 = require("mongodb").Int16;
const Float = require("mongodb").Float;
const Joi = require("joi")

const wynikSchema = new mongoose.Schema({
    pozycja: { type: String, required: true , default: 0},
    nr_zaownika: { type: String, required: true },
    zawodnik:  { type: String, required: true },
    kraj:  { type: String, required: true },
    odleglosc: { type: String, required: true },
    belka: { type: String, required: true },
    nota: { type: String, required: true },
    wiatr: { type: String, required: true },
    punkty: { type: String, required: true },
})

const Wynik = mongoose.model("Wynik", wynikSchema)

const validate2 = (data) => {
    const schema = Joi.object({
        pozycja: Joi.string().required().label("pozycja"),
        nr_zaownika: Joi.string().required().label("nr_zaownika"),
        zawodnik: Joi.string().required().label("zawodnik"),
        kraj: Joi.string().required().label("kraj"),
        odleglosc: Joi.string().required().label("odleglosc"),
        belka: Joi.string().required().label("belka"),
        nota: Joi.string().required().label("nota"),
        wiatr: Joi.string().required().label("wiatr"),
        punkty: Joi.string().required().label("punkty"),
    })
    return schema.validate(data)
}
module.exports = { Wynik, validate2 }

