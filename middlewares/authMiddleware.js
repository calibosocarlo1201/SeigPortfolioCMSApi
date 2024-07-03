import jwt from 'jsonwebtoken'
import User from '../models/users.js';

export const protect = async (req, res, next) => {
    console.log('Cookies:', req.cookies);
    const token = req.cookies.jwt;

    if(!token) return res.status(401).json({message: "Not authorized"});

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select('-password')
        next();

    } catch (error) {
        res.status(401).json({message: "Token is not valid"})
    }
} 