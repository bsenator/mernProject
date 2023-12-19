import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

async function authenticateToken(req, res, next) {

    try {

        // const authHeader = req.headers["authorization"];
        // console.log("autHeader", authHeader);
        // const token = authHeader && authHeader.split(" ")[1]
        // console.log("token", token);
        const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
        
        if (!token) {
            return res.status(401).json({
                succeeded: false,
                error: 'no toke availabla',
            });
        }

        req.user = await User.findById(
            jwt.verify(token, process.env.JWT_SECRET).userId
        );

        next();
            
    } catch (error) {
        res.status(401).json({
            succeeded: false,
            error: "not authorized",
        });
    }
};

export {authenticateToken};
