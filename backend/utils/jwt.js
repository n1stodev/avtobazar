import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config()
const secretKey = process.env.SECRET_KEY;
export const JWT = {
    SIGN: (payload) => {
        return jwt.sign(payload, secretKey);
    },
    VERIFY: (token) => {
        return jwt.verify(token, secretKey);
<<<<<<< HEAD
    }
=======
    } 
>>>>>>> 3af16b75607c56bc3a952f70471f19f488d582ff
}