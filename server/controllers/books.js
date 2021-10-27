"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayBookDeletePage = exports.ProcessBookEditPage = exports.DisplayBookEditPage = exports.ProcessBookAddPage = exports.DisplayBookAddPage = exports.DisplayBookListPage = void 0;
const books_1 = __importDefault(require("../models/books"));
function DisplayBookListPage(req, res, next) {
    books_1.default.find(function (err, BookList) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('books/index', { title: 'COMP229 Booklist', books: BookList });
    });
}
exports.DisplayBookListPage = DisplayBookListPage;
;
function DisplayBookAddPage(req, res, next) {
    res.render('books/details', { title: 'Add a Book', books: "" });
}
exports.DisplayBookAddPage = DisplayBookAddPage;
;
function ProcessBookAddPage(req, res, next) {
    let newBook = new books_1.default({
        "Title": req.body.title,
        "Price": req.body.price,
        "Author": req.body.author,
        "Genre": req.body.genre
    });
    books_1.default.create(newBook, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        ;
        res.redirect('list');
    });
}
exports.ProcessBookAddPage = ProcessBookAddPage;
;
function DisplayBookEditPage(req, res, next) {
    let id = req.params.id;
    books_1.default.findById(id, {}, {}, (err, BookModelToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('books/details', { title: "Edit a Book", books: BookModelToEdit });
    });
}
exports.DisplayBookEditPage = DisplayBookEditPage;
;
function ProcessBookEditPage(req, res, next) {
    let id = req.params.id;
    let updatedItem = new books_1.default({
        "_id": id,
        "Title": req.body.title,
        "Price": req.body.price,
        "Author": req.body.author,
        "Genre": req.body.genre
    });
    books_1.default.updateOne({ _id: id }, updatedItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('list');
    });
}
exports.ProcessBookEditPage = ProcessBookEditPage;
;
function DisplayBookDeletePage(req, res, next) {
}
exports.DisplayBookDeletePage = DisplayBookDeletePage;
;
//# sourceMappingURL=books.js.map