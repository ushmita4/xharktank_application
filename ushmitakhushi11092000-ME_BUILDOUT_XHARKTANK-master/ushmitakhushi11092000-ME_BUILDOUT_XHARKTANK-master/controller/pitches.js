import mongoose from "mongoose";//import mongoose
import Pitch from '../models/pitchModel.js';//calling the Pitch model from the pitchModel.js file
import Investor from "../models/investorModel.js";//calling the Investor model from the investorModel.js file

//this is the createPost function
export const createPost = async (req, res) => {
    const pitch = req.body;
    const newPitch = new Pitch({ ...pitch, createdAt: new Date().toISOString() });
//this is the try block
    try {
        //this part can be cleared
        if(newPitch.equity>100)
        res.status(400).json({message:"Invalid Equity"})
        //this part can be cleared
        else{
        await newPitch.save();
       //database cleared
       
        
        res.status(200).json({
            id: newPitch._id,
        });
        }
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//this is the getPitches function
export const getPitches = async (req, res) => {

    try {
        const postPitches = await Pitch.find().sort({createdAt:-1}).populate('offers');
        res.status(200).json(postPitches);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//this is the getOnePitch function
export const getOnePitch = async (req, res) => {
    const { id } = req.params;

//this is the try block
    try {
        const pitch = await Pitch.findById(id).populate('offers');
        if (!pitch) {
            res.status(400);
            throw new error("Pitch not exits")
        }
        res.status(200).json({
            id:pitch._id,
            entrepreneur:pitch.entrepreneur,
            pitchTitle:pitch.pitchTitle,
            pitchIdea:pitch.pitchIdea,
            askAmount:pitch.askAmount,
            equity:pitch.equity,
            offers:pitch.offers,

        });

    } catch (error) {//
        res.status(404).json({ message: error.message });
    }
};
//this part can be cleared
        
export const makeOfferByInvestor = async (req, res) => {
    const { id } = req.params;

    try {
        
        
        const pitch = await Pitch.findById(id);
        
         
        if (!pitch) {
            return res.status(404).json({
                message: 'Pitch not found',
            })
        }

        const offer = req.body;
        const newOffer = new Investor({ ...offer, createdAt: new Date().toISOString() });
         //this part can be cleared
        if(newOffer.equity>100)
        res.status(400).json({message:"Invalid Equity"})
        //this part can be cleared
        else{
        await newOffer.save();
        pitch.offers.push(newOffer);
        pitch.save();
        res.status(200).json({
            id: newOffer._id,
        });
        }
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
        


