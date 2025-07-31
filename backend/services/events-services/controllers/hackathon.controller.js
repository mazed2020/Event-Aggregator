
const { mongo } = require('mongoose');
const Hackathon = require('../models/hackathon.model');
const mongoose = require('mongoose');

const createHackathon = async (req, res) => {
    try {
        const data = Array.isArray(req.body) ? req.body : [req.body];
        const hackathons = await Hackathon.insertMany(data);
        res.status(201).json({
            message: `${hackathons.length} hackathon(s) created successfully`,
            data: hackathons
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllHackathons = async (req, res) => {
    try {
        const hackathons = await Hackathon.find();
        res.status(200).json({
            message: `${hackathons.length} hackathon(s) found`,
            data: hackathons
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getforhomepage = async (req, res) => {
    try {
        const hackathons = await Hackathon.find().sort({startDate:1}).limit(3);
        res.status(200).json({
            message: `${hackathons.length} hackathon(s) found`,
            data: hackathons
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const findHackendById = async (req, res) => {
    try {
        const hackathon = await Hackathon.findById(req.params.id);
        res.status(200).json({
            message: `hackathon found`,
            data: hackathon
        });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
    
}


const updateHackathon = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const hackathon = await Hackathon.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, data, { new: true });
        res.status(200).json({
            message: `hackathon updated`,
            data: hackathon
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteHackathon = async (req, res) => {
    const {id} = req.params;
    try {
        const hackathon = await Hackathon.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
        res.status(200).json({
            message: `hackathon deleted`,
            data: hackathon
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}  


module.exports = {
    createHackathon,
    getAllHackathons,
    findHackendById,
    updateHackathon,
    deleteHackathon,
    getforhomepage
}