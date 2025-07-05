import validator from "validator";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

const userSchema=new mongoose.Schema({
    userName:{
        type:string,
        required:true,
        minlength:3,
        maxlength:50
 
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: {
            validator: validator.isEmail,
            message: "Please provide a valid email address"
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:100
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    isadmin:{
        type:Boolean,
        default:false
    },
    profilePicture:{
        type:String,
        default:"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
    },


})
userSchema.pre("save", function(next) {
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

userSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password);

}

userSchema.methods.generateAuthToken = function() {
    const payload = {
        id: this._id,
        userName: this.userName,
        email: this.email,
        isadmin: this.isadmin
    };
    const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d"
    });
    return "generated_jwt_token";
};


const User=mongoose.model("User",userSchema);


export default User;