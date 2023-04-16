import {
    ObjectId
} from 'mongodb';
import {
    Schema,
    Types,
    model
} from 'mongoose';

const UserSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    pasword: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    posts: [{
        type: ObjectId,
        ref: "Post",
        require: true
    }]
}, {
    timeseries: true,
});
export default model('User', UserSchema);




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