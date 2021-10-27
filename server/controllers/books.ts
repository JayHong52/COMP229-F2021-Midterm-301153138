/*=============================================
  FileName: controllers/business.ts
  ProjectName: COMP229-005, Assignment #2
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-22
  ============================================*/

import express from 'express';
import BookModel from '../models/books';

// GET books List page. READ 
export function DisplayBookListPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    BookModel.find(
        function (err, BookList) {
            if (err) {
                console.error(err);
                res.end(err);
            }
            res.render('books/index', { title: 'COMP229 Booklist', books: BookList })
        }
    )
};

// GET the Book Details page in order to add a new Book
export function DisplayBookAddPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('books/details', { title: 'Add a Book', books: "" });
};

// POST process the Book Details page and create a new Book - CREATE
export function ProcessBookAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {

    let newBook = new BookModel({
        "Title": req.body.title,
        "Price": req.body.price,
        "Author": req.body.author,
        "Genre": req.body.genre
    });
    BookModel.create(newBook, (err: any) => {
        if (err) {
            console.error(err);
            res.end(err);
        };
        res.redirect('list');
    })
};

// GET the Book Details page in order to edit an existing Book

export function DisplayBookEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    BookModel.findById(id, {}, {}, (err, BookModelToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('books/details', { title: "Edit a Book", books: BookModelToEdit })
    })
};

// POST - process the information passed from the details form and update the document

export function ProcessBookEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
};

export function DisplayBookDeletePage(req: express.Request, res: express.Response, next: express.NextFunction) {

};
// GET - process the delete by user id
