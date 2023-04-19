import {
    ObjectId
} from 'mongodb';
import {
    Schema,
    model
} from 'mongoose';
const CommentSchema = new Schema({
    commet: {
        type: String,
        require: true
    },
    commentOfUser: [{
        type: ObjectId,
        require: true,
        ref: "User"
    }],
    postOfUser: [{
        type: ObjectId,
        require: true,
        ref: "Post"
    }]
}, {
    timeseries: true,
});
export default model('Comment', CommentSchema);




// !(async function () {
//     // userModel.create({ name: 'John3', age: 122 })
//     // userModel.insertMany([{
//     //     name: 'John3',
//     //     age: 32
//     // }, {
//     //     name: 'John4',
//     //     age: 32
//     // }, ])
//     // console.log(await userModel.find());
//     // console.log(await userModel.findById('64368e3c41b9dac2086fba6a'));
//     // console.log(await userModel.deleteOne({name: "John"})); 
//     // console.log(await userModel.deleteMany({name: "John"}));
//     // console.log(await userModel.deleteMany({name: "John"}));
//     console.log('user Added successfully');
// })()