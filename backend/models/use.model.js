import user from "../schemas/user.schema.js";


class UserClass {
    async get(id) {
        if (id) return await user.findById(id);
        //  else return await user.find({$or:[{name:"dina23", age:12}]},{name:1,age:1, _id:0});
        else return await user.find().populate('posts');
    }
    async post(data) {
        return await user.create(data);
    }
    async put(id, data) {
        return await user.updateOne({
            _id: id
        }, data);
    }
    async delete(id) {
        return await user.deleteOne({
            _id: id
        });
    }
}
export default new UserClass();