const asyncHandler = require("express-async-handler");
const User = require("../models/userMode")
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")


const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are necessary");
    }

    if (await User.findOne({email})) {
        res.status(400);
        throw new Error("User already exixts");
  }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(`hashed password ${hashedPassword}`);
    const user = await User.create({ username, email, password: hashedPassword });
    if (user) {
        res.status(200).json({ _id: user.id, email: user.email });
    }
    else {
        res.status(400);
        throw new Error('User data is not valid')
    }
})


const login = asyncHandler(async (req, res) => {
    const {email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are necessary");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1hr" }
        );
        res.status(200).json({ accessToken });
    }
    else {
        res.status(401);
        throw new Error("Invalid Crediantial");
    }
})
const current = asyncHandler(async (req, res) => {
    
    res.json(req.user);
})

module.exports = {
    register,login,current
};