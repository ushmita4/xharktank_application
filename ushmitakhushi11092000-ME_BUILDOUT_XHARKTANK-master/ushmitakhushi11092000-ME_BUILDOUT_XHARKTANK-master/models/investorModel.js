import mongoose from "mongoose";

const investorSchema=new mongoose.Schema({
    investor:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,//Number
        required:true,
    },
    equity:{
        type:Number,//Number
        required:true,
    },
    comment:{
        type:String,
    },
    createdAt:{
        type:Date,
        default: new Date()
    },

});

const Investor=mongoose.model('Investor',investorSchema);
export default Investor;
