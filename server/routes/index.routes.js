const express = require('express');
const router  = express.Router();

const RoadAssistance = require('../models/RoadAssistance-model')
const Services = require('../models/Services')

/* GET home page */
router.get('/getAllRecoveryServices', (req, res, next) => {
  RoadAssistance.find({ role:"recoveryService"})
    .then(data => res.json(data))
    .catch(err => console.log('Error:', err))
});
router.get('/getAllPolicyholders', (req, res, next) => {
  RoadAssistance.find({ role:"policyholder"})
    .then(data => res.json(data))
    .catch(err => console.log('Error:', err))
});

router.post('/postLocation', (req, res) => {
  // console.log("hello")
  // console.log(req.body)
  const newService = {...req.body};
  newService.userId = req.user._id
  Services.create(newService)
  .then(data => {
    console.log(data)
    res.json(data)})
  .catch(err => console.log('Error', err))
  //console.log(req.body); res.json({msg:"location ok!"})
}) 

router.get('/services', (req, res) => {

  console.log(req)
  Services.find({userId:req.user._id})
  .populate("pickupId")
  .populate("userId")
  .then(data => res.json(data))
  .catch(err => console.log('Error:', err))
})

module.exports = router;
