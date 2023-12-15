import bcrypt from "bcrypt";
import mongoose from "mongoose";

const {Schema} = mongoose;
const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },
},
    {
        timestamps:true,
    }
);

userSchema.pre('save', function(next) {
    const user =this;
    console.log('user pass ', user.password);
    bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash;
        console.log('user pass 2 ', user.password);
        next();
    });    
});

//model olusturuyorum
const User = mongoose.model('User', userSchema);

export default User;