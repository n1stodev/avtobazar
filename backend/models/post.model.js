import post from "../schemas/post.schema.js";
import userSchema from "../schemas/user.schema.js";
class postClass {
    async get(id) {
        if (id) return await post.findById(id).populate("comment");
        else return await post.find().populate("postOfUser");
    }
    async post(data) {
        let {
            _id,
        } = await post.create(data);
        console.log('data :', data);
        await userSchema.findByIdAndUpdate(data.postOfUser, {
            $push: {
                posts: _id
            }
        });
        return "User added successfully.";
    }
    async put(id, data) {
        return await post.updateOne({
            _id: id
        }, data);
    }
    async delete(id) {
        return await post.deleteOne({
            _id: id
        });
    }
}
export default new postClass();