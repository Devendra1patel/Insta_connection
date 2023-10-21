
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    content:String
},
{timestamps:true}
)
const likeSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}
)

const postSchema = new mongoose.Schema({
    heading:{type:String, maxlength:30},
    post_pic:[{type:String}],
    post_description:String,
    likes:[likeSchema],
    comments:[commentSchema]
},
{ timestamps: true  }
);
// const Post = mongoose.model('Post', postSchema);

const followingSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
},
{timestamps:true}
)

const followerSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
},
{timestamps:true}
)


const userSchema = new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    username:{type:String, unique:true, require:true, maxlength:20 },
    email:{type:String,unique:true,  require:true},
    profile_pic:String,
    password:{type:String },
    posts_count:{type:Number},
    following_count:{type:Number},
    follower_count:{type:Number},
    posts:[postSchema],
    following:[followingSchema],
    follower:[followerSchema]
})
const User = mongoose.model('User', userSchema); 
export {User};