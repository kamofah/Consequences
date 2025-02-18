const express = require('express');
const Card = require('../models/card');
const router = express.Router();

// Get all Cards
router.get('/', async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (err) {
        console.log(err.message);
    }
});
  
// Get a Card
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const card = await Card.findById(id)

        if(card === null){
            return res.status(404).json({ error: 'Card not found' });
        } else {
            console.log(res.json(card));
        }
    } catch (err) {
        console.log(err.message);
    }
});


// Create a Card
router.post('/', async (req, res) => {
    try {
        const { topic, card_type, prompt, consequence, timer } = req.body;

        const newCard = new Card({
            topic,
            card_type,
            prompt,
            consequence,
            timer
        })

        const savedCard = await newCard.save()
        res.json(savedCard)
        console.log(res.json(savedCard));
    } catch (err) {
        console.error(err.message);
    }
});

// Update a Card
router.put('/:id', async (req, res) => {
    try {
        const { topic, card_type, prompt, consequence, timer } = req.body; 
        const { id } = req.params;

        const updatedCard = await Card.findByIdAndUpdate(id, {
            topic,
            card_type,
            prompt,
            consequence,
            timer
        },  { new: true });

        res.json(updatedCard)
        console.log(res.json(updatedCard));
    } catch (err) {
        console.log(err.message);
    }
});

// Delete a Card
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCard = await Card.findByIdAndDelete(id)
        res.json(deletedCard)
        console.log(res.json(deletedCard));
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router