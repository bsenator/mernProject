import mongoose from "mongoose";

const {Schema} = mongoose;
const photoSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },

    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});


//model olusturuyorum
const Photo = mongoose.model('Photo', photoSchema);

export default Photo;