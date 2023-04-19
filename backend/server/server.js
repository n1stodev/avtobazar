<<<<<<< HEAD
import express from "express";
import "../utils/mongo.js";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from 'body-parser';
import userRoutes from '../routes/users.routes.js';
import postRoutes from '../routes/posts.routes.js';
import commentRoutes from '../routes/comments.routes.js';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(express.json());
// User routes
app.use('/api',userRoutes);

// Post routes
app.use('/api', postRoutes);

// Comment routes
app.use('/api', commentRoutes);

app.listen(PORT, () => {
    console.log("Service listening on port " + PORT);
});
=======
import express from 'express';
import '../utils/mongo.js';
import userRoute from "../router/user.routes.js";
import postRoute from "../router/post.routes.js";
import commentRoute from "../router/comment.routes.js";
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(userRoute);
app.use(postRoute);
app.use(commentRoute);
app.listen(PORT), console.log('server ishladi....');
>>>>>>> 3af16b75607c56bc3a952f70471f19f488d582ff
