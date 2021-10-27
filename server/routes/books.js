"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let book = require('../models/books');
router.get('/', (req, res, next) => {
    book.find((err, books) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('books/index', {
                title: 'Books',
                books: books
            });
        }
    });
});
router.get('/add', (req, res, next) => {
});
router.post('/add', (req, res, next) => {
});
router.get('/:id', (req, res, next) => {
});
router.post('/:id', (req, res, next) => {
});
router.get('/delete/:id', (req, res, next) => {
});
exports.default = router;
//# sourceMappingURL=books.js.map