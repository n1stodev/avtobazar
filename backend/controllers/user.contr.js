import user from '../models/use.model.js';
import {
    JWT
} from '../utils/jwt.js';

class UserContr {
    async find(req, res, next) {
        const {
            id
        } = req.params;
        res.send(await user.get(id));
    }
    async creat(req, res, next) {
        let {
            _id,
            username
        } = await user.post(req.body);
        res.send({
            message: "User created succesfully " + username.toLocaleUpperCase(),
            token: JWT.SIGN({
                id: _id.toString()
            })
        })
    }
    async update(req, res, next) {
        const {
            id
        } = req.params;
        res.send(await user.put(id, req.body));
    }
    async delete(req, res, next) {
        const {
            id
        } = req.params;
        res.send(await user.delete(id));
    }
}

export default new UserContr();