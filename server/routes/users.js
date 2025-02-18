const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const user = await User.find()
        res.json(user)
    } catch (err) {
        console.log(err.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById()
        res.json(user)
    } catch (err) {
        console.log(err.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const {fullName, username, password, phoneNumber, gender, profileImageUrl, tier} = req.body

        const newUser = new User({
            fullName,
            username,
            password,
            phoneNumber,
            gender,
            profileImageUrl,
            tier
        }) 

        const savedUser = await newUser.save()
        res.json(savedUser)
    } catch (err) {
        console.log(err.message)
    }
})


router.put('/:id', async (req, res) => {    
    try {
        const {id} = req.params
        const {fullName, username, password, phoneNumber, gender, profileImageUrl, tier} = req.body
        const updatedUser = await User.findByIdAndUpdate(id, {
            fullName,
            username,
            password,
            phoneNumber,
            gender,
            profileImageUrl,
            tier
        }, {new: true})

        res.json(updatedUser)
    } catch (err) {
        console.log(err.message)
    }
})

module.exports = router