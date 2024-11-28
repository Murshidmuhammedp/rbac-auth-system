import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const verifyModerator = (req, res, next) => {
    try {
        const token = req.header["authorization"];

        if (!token) {
            res.status(403).json({ message: "Token is not provided" });
        }

        Jwt.verify(token, process.env.MODERATOR_JWT_SECRET_KEY, (err, decode) => {
            if (err) {
                res.status(401).json({ message: "Unauthorized" });
            }
            if (decode.role !== 'Moderator') {
                return res.status(403).json({ message: "Access Denied." });
            }
            req.email = decode.email;
            next();
        });
    } catch (error) {
        return next(error)
    }
};