import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  title: String,
  handle: String,
  avatarImage: String,
  dislikes: Number,
  stats : {
    comments : Number,
    retuits : Number,
    likes : Number
  },
  likes: Number,
  postedBy: {
    username: String
  }
}, {collection: 'tuits'});
export default schema;