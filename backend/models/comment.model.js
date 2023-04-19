import comment from "../schemas/comment.schema.js";
import postSchema from "../schemas/post.schema.js";


class CommentClass {
    async get(id) {
        if (id) return await comment.findById(id);
        else return await comment.find({}, {
            commet: 1,
            // commentOfUser:
        }).populate('commentOfUser').populate('postOfUser');
    }
    async post(data) {
        let {
            _id
        } = await comment.create(data);
        await postSchema.findByIdAndUpdate(data.postOfComment, {
            $push: {
                comment: _id
            }
        });
        return "comment added to post"
    }
    async put(id, data) {
        return await comment.updateOne({
            _id: id
        }, data);
    }
    async delete(id) {
        return await comment.deleteOne({
            _id: id
        });
    }
}
export default new CommentClass();