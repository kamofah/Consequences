const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    card_type: { type: String, required: true },
    prompt: { type: String, required: true },
    consequence: { type: Number, required: true },
    timer: { type: Number, default: 30 },
}, { timestamps: true });

module.exports = mongoose.model('Card', cardSchema);
