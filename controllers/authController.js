import User from "../models/userModel";

export const register = async (req, res) => {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newUser = await User.create({ userName, email, password });
        if (!newUser) {
            return res.status(400).json({ error: "User registration failed" });
        }
        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                userName: newUser.userName,
                email: newUser.email,
                profilePicture: newUser.profilePicture
            },
            token: newUser.generateAuthToken()


        });


    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
