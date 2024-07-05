const express = require("express");
const voitureModel = require("./models/voiture.model");

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Bonjour Bootcamp React!");
});
//methode get toutes les voitures
route.get("/listeVoiture", async (req, res) => {
  try {
    const listVoiture = await voitureModel.find({});
    res.status(200).json(listVoiture);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

route.get("/voiture/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const voitureId = await voitureModel.findById(id);
    res.status(200).json(voitureId);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

route.post("/createVoiture", async (req, res) => {
  try {
    const voiture = await voitureModel.create(req.body);
    console.log(req.body);
    res.status(200).json(voiture);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

//route mis a jour les information d une voiture
route.put("/modifierVoiture/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const modifierVoiture = await voitureModel.findByIdAndUpdate(id, req.body);
    if (!modifierVoiture) {
      return res.status(400).json({
        message: `Je ne peux pas trouver la voiture avec l'id ${id}`,
      });
    }
    res.status(200).json(modifierVoiture);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

//Route supprimer une voiture de la base des données

route.delete("/supprimerVoiture/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const supprimerVoiture = await voitureModel.findByIdAndDelete(id);
    if (!supprimerVoiture) {
      return res.status(404).json({
        message: `Je n'ai pas trouvé la voiture avec l'id ${id}`,
      });
    }
    res.status(200).json(supprimerVoiture)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
        message: error.message
    })
  }
});

module.exports = route;
