import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

const Model = mongoose.model("books", BookSchema);

export default Model;