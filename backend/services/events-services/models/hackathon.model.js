 
const mongoose = require('mongoose');

const HackathonSchema = new mongoose.Schema({
    title: String,
    description: String,
    region: String,
    mode: String,
    link: String,
    tags: [String],
    startDate: Date,
    endDate: Date,
    createdBy: String // Admin or scraper ID
}, { timestamps: true });

module.exports = mongoose.model('Hackathon', HackathonSchema);
