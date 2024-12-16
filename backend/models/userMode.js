const mongoose = require("mongoose")
const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "please provide name"],
        },
        email: {
            type: String,
            required: [true, "please provide email"],
            unique:[true,"Please provide a unique email"]
        },
        password: {
            type: String,
            required: [true, "password required"],
        },
    },
    {
        timestamps: true,

    }
);

module.exports = mongoose.model("User", userSchema);