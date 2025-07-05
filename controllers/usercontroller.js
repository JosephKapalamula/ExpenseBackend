import User from "../models/userModel.js";

export const gettAllUsers= async (req,res)=>{
    try{
        const users= await User.find();
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(users);

    }catch(error){
        res.status(500).json({message: "Error fetching users", error: error.message});
    }
}


export const getUserById = async (req, res) => {
    const userId=req.params.userId
    try{
        const user=await User.findById(userId);
        if (!user) {
         return res.status(404).json({ message: "User not found" });
    }

    }catch(error){
        res.status(500).json({message: "Error fetching user", error: error.message});
    }
    

}

export const createUser=async (req,res)=>{
    const {email, password, name} = req.body;
}