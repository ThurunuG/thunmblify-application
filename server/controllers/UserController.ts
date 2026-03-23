import {Request, Response} from 'express'
import User from '../models/User.js';
import bcrypt from 'bcrypt'
import Thumbnail from '../models/Thumbnail.js';

export const getUsersThumbnails = async (req: Request, res: Response)=>{
    try{
        const {userId} = req.session;
        const thumbnail = await Thumbnail.find({userId}).sort({createdAt: -1})

        return res.json({thumbnail})

    }catch(error: any){
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

export const getThumbnailbyId = async (req: Request, res: Response)=>{
    try{
        const {userId} = req.session;
        const {id} = req.params;

        const thumbnail = await Thumbnail.findOne({userId, _id: id});

        return res.json({thumbnail})

    }catch(error: any){
        console.log(error);
        res.status(500).json({message: error.message})
    }
}