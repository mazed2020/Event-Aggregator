const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

UserSchema.pre("save",async function(){
      if(this.isModified("password")){
          this.password = await bcrypt.hash(this.password, 10);
      }
})

UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);
