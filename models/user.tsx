import {Schema,model,models} from "mongoose";


const userSchema = new Schema({
    email:{
        type: String,
        unique:[true,'Email already exists'],
        required:[true,'Email is required']
    },
    name:{
        type: String,
        required:[true,'Name is required']
    },
    image:{
        type: String,
        required:[true,'img is required']
    },
    role:{
        type: String,
        default: "member",
        required:[true,'role is required']

    },
    
},
);

const User = models.User || model("User", userSchema);

export default User;