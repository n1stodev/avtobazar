import {
    ObjectId
} from 'mongodb';
import {
    Schema,
    model
} from 'mongoose';


const PostSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    images: {
        type: String,
        require: true
    },
    postOfUser: [{
        type: ObjectId,
        require: true,
        ref: "User"
    }],
    
    comment: [{
        type: ObjectId,
        require: true,
        ref: "Comment"
    }]
}, {
    timeseries: true,
});
export default model('Post', PostSchema);




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