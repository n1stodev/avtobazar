import post from '../models/post.model.js';
import {
    JWT
} from '../utils/jwt.js';
class postContr {
    async find(req, res, next) {
        const {
            id
        } = req.params;
        res.send(await post.get(id));
    }
    async creat(req, res, next) {
        try {
            if (!JWT.VERIFY(req.headers.token)) throw new Error('Invalid token!');
            let {
                id
            } = JWT.VERIFY(req.headers.token);
            let {
                title,
                images,
                comment
            } = req.body;

            res.send(await post.post({
                title,
                images,
                comment,
                postOfUser: id
            }));
            
        } catch (error) {
            res.send({
                message: error.message
            })

        }
    }
    async update(req, res, next) {
        const {
            id
        } = req.params;
        res.send(await post.put(id, req.body));
    }
    async delete(req, res, next) {
        const {
            id
        } = req.params;
        res.send(await post.delete(id));
    }

}

export default new postContr();
CHECK: (req, res, next) => {
    try {
        if (!VERIFY(req.headers.token)) throw new Error('Invalid token!')
        res.send({
            status: 200,
            message: 'Success!',
        })
    } catch (error) {
        res.send({
            status: 404,
            message: error.message
        })
    }
}