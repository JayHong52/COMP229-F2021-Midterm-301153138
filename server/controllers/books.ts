/*=============================================
  FileName: controllers/books.ts
  ProjectName: COMP229-005, Assignment #2
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-29
  ============================================*/

import express from 'express';
import BookModel from '../models/books';

// =================================  
// 2. Book-List : DISPLAY(GET)
// =================================  
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

// =================================  
//  2.a Book-ADD : DISPLAY(GET)
// =================================
export function DisplayBookAddPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('books/details', { title: 'Add a Book', books: "" });
};

// =================================
//  2.b Book-ADD : PROCESS(POST)
// ================================= 
export function ProcessBookAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    let id = req.params.id;
    let newBook = new BookModel({
        "_id": id,
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
        res.redirect('/books/');
    })
};

// =================================  
//  2.c Book-EDIT : DISPLAY(GET)
// =================================
export function DisplayBookEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    BookModel.findById(id, {}, {}, (err, bookItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('books/details', { title: "Edit a Book", books: bookItemToEdit })
    })
};

// =================================  
//  2.d Book-EDIT : PROCESS(POST)
// =================================
export function ProcessBookEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    let updatedItem = new BookModel({
        "_id": id,
        "Title": req.body.title,
        "Price": req.body.price,
        "Author": req.body.author,
        "Genre": req.body.genre
    });
    BookModel.updateOne({ _id: id }, updatedItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/books/');
    })
}

// =================================  
//  2.d Book-DELETE : DISPLAY(GET)
// =================================
export function DisplayBookDeletePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    BookModel.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/books/');
    })
};