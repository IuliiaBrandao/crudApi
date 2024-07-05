const express = require('express')
const router = express.Router()
const competenceModel = require('../model/competenceModel')

router.get("/competence", async (req, res) => {
    const competences = await competenceModel.find()
    res.json(competences)
})

router.post('/competence', async (req, res) => {
    const competence = req.body
    const newCompetence = await competenceModel.create(competence)
    res.json(newCompetence)
})

router.delete('/competence/:id', async(req,res)=>{
    const {id} = req.params
    
    await competenceModel.findByIdAndDelete(id)
    res.json({message:'competence supprimée'})
})
module.exports = router