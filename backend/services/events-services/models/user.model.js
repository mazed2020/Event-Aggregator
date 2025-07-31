const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String, // hashed
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    favorites: [{
        type: { type: String }, // 'job', 'contest', etc.
        eventId: mongoose.Schema.Types.ObjectId
    }],
    preferences: {
        tags: [String],
        platforms: [String]
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
