const router = require("express").Router()
const { User } = require("../models/user")
const { Wynik } = require("../models/wyniki")
//const { updateUserProfile } = require("../controllers/userController.js")
//const { UserSeleted } = require("../models/UserSeleted")
//import { updateUserProfile } from "../controllers/userController.js";
router.get("/", async (req, res) => {
    //pobranie wszystkich użytkowników z bd:
    User.find().exec()
        .then(async () => {
            const users = await User.find();
            //konfiguracja odpowiedzi res z przekazaniem listy użytkowników:
            res.status(200).send({ data: users, message: "Lista użytkowników" });
        })
        .catch(error => {
            res.status(500).send({ message: error.message });
        });
})

router.get("/delete", async (req, res) => {
    //pobranie wszystkich użytkowników z bd:
    User.find().exec()
        .then(async () => {
            User.findByIdAndRemove(req.user._id).exec()
            res.status(200).send({message: "usunieto uzytkownika" }); 
        })
        .catch(error => {
            res.status(500).send({ message: error.message });
        });
})

router.get("/detail", async (req, res) => {
    //pobranie wszystkich użytkowników z bd:
    User.find().exec()
        .then(async () => {
            const UserSSeleted = await User.find({"_id": req.user._id,});
            //({company:companyID}).exec()
            //konfiguracja odpowiedzi res z przekazaniem listy użytkowników:
            res.status(200).send({ data: UserSSeleted, message: "Lista użytkowników" });

        })
        .catch(error => {
            res.status(500).send({ message: error.message });
        });
})

router.get("/wyniki", async (req, res) => {
    //pobranie wszystkich wyników skoków z bazy
    Wynik.find().exec()
        .then(async () => {
            const wyniki = await Wynik.find();
            //konfiguracja odpowiedzi res z przekazaniem listy:
            //const UserSSeleted = await User.find({"_id": req.user._id,});
            res.status(200).send({ data: wyniki, message: "Wyniki skoków" });
        })
        .catch(error => {
            res.status(500).send({ message: error.message });
        });
        
})

router.route('/wyniki2').get((req, res) => {
    Wynik.find()
      .then(wynik => res.json(wynik))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
router.route('/update2').post((req, res) => {
    User.findById(req.user.id)
     .then(usered => {
        usered.firstName = req.body.firstName;
        usered.lastName = req.body.lastName;
        usered.email = req.body.email;
        usered.update()
         .then(() => res.json('Usered updated!'))
         .catch(err => res.status(400).json('Error: ' + err));
     })
     .catch(err => res.status(400).json('Error: ' + err));
 });

 router.route('/update3').get((req, res) => {
    User.findById(req.user._id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
router.post("/update", async (req, res) => {
    //pobranie wszystkich użytkowników z bd:
    User.findById(req.user._id).exec()
        .then(usered => {
            usered.firstName = req.body.firstName;
            usered.lastName = req.body.lastName;
            usered.email = req.body.email;
            console.log(req.body.firstName)
            console.log(req.body.lastName)
            console.log(usered.firstName)
            usered.save()
        })
        .catch(error => {
            res.status(500).send({ message: error.message });
        });
})


module.exports = router