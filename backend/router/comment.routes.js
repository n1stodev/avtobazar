import {
    Router
} from "express";
import comment from "../controllers/comment.contr.js";
const commentRoute = Router();

commentRoute.get('/comments', comment.find);
commentRoute.get('/comments/:id', comment.find);
commentRoute.post('/comments', comment.creat);
commentRoute.put('/comments/:id', comment.update);
commentRoute.delete('/comments/:id', comment.delete);
export default commentRoute;