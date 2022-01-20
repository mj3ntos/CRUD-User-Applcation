const { request } = require('express');
const express = require('express');
const router = express.Router();
const templateCopy = require('../models/models');

router.post('/create', (req, res) => {
    const user = new templateCopy({
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        surveys: req.body.surveys,
        email: req.body.email
    });
    user.save()
    .then( data =>{
        res.json(data);
    })
    .catch(error =>{
        res.json(error);
    });
});

router.get('/get', (req, res, next) =>{
    templateCopy.find({})
    .then( data => res.send(data))
    .catch(next);
});

router.get('/get/:id', (req, res, next) =>{
    templateCopy.findOne({_id: req.params.id})
    .then( data => res.send(data))
    .catch(next);
})

router.put('/update/:id', (req, res) =>{
    templateCopy.findOneAndUpdate({ _id: req.params.id,
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        surveys: req.body.surveys,
        email: req.body.email
    })
    .then((user) => templateCopy.findOne({ _id: req.params.id}))
    .then((user) =>res.send(user));
});

router.delete('/delete/:id', (req, res) => {
    templateCopy.findOneAndDelete({ _id: req.params.id})
    .then((user) => res.send(user));
});


module.exports = router;