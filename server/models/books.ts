import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/*=============================================
  FileName: models/books.ts
  ProjectName: COMP229-005, Midterm Test
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-29
  ============================================*/

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