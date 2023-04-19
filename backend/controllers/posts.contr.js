import Post from "../schemas/posts.schema.js"
import usersSchema from "../schemas/users.schema.js";
import {
    JWT
} from "../utils/jwt.js";

class PostController {
    static async create(req, res) {
        try {
            let token = req.headers.token;
            let {
                _id
            } = await usersSchema.findById(JWT.VERIFY(token).id)
            let {
                title,
                distance,
                color,
                variant,
                wheel,
                price,
                description,
                comments,
                year,
            } = req.body;
            if (!_id) {
                return res.send({
                    message: "Invalid token Please try again later",
                    status: 404
                })
            } else {
                const post = new Post({
                    title,
                    distance,
                    author: _id,
                    color,
                    variant,
                    wheel,
                    price,
                    year,
                    description,
                    comments
                });
                await post.save();
                res.status(201).send({
                    data: post,
                    status: 200
                });
            }
        } catch (err) {
            console.log('err :', err);
            res.status(500).send('Server error');
        }
    }

    static async getAll(req, res) {
        try {
            const posts = await Post.find().populate('author', 'username');
            res.json(posts);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }

    static async getById(req, res) {
        try {
            const post = await Post.findById(req.params.id).populate('author', 'username');
            if (!post) {
                return res.status(404).send('Post not found');
            }
            res.json(post);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }

    static async update(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            if (!post) {
                return res.status(404).send('Post not found');
            }
            if (req.user._id.toString() !== post.author.toString()) {
                return res.status(403).send('Forbidden');
            }
            post.title = req.body.title;
            post.content = req.body.content;
            await post.save();
            res.json(post);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }

    static async delete(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            if (!post) {
                return res.status(404).send('Post not found');
            }
            if (req.user._id.toString() !== post.author.toString()) {
                return res.status(403).send('Forbidden');
            }
            await post.delete();
            res.send('Post deleted');
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }
}

export default PostController;