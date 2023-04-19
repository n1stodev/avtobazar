import comment from '../models/comment.model.js';
import {
    JWT
} from '../utils/jwt.js';
class commentContr {
    async find(req, res, next) {
        const {
            id
        } = req.params;
        res.send(await comment.get(id));
    }
    async creat(req, res, next) {
        try {
            if (!JWT.VERIFY(req.headers.token)) throw new Error('Invalid token!');
            let {
                id
            } = JWT.VERIFY(req.headers.token);

            let {
                commet,
                postOfComment
            } = req.body;






            
            res.send(await comment.post({
                commet,
                postOfComment,
                commentOfUser: id
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
        res.send(await comment.put(id, req.body));
    }
    async delete(req, res, next) {
        const {
            id
        } = req.params;
        res.send(await comment.delete(id));
    }

}

export default new commentContr();
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