// modules required for routing
import express from 'express';
const router = express.Router();
import { DisplayBookListPage, DisplayBookAddPage, ProcessBookAddPage, DisplayBookEditPage, ProcessBookEditPage, DisplayBookDeletePage } from '../controllers/books';


// ===========================
//  Get Books List Page.
// ===========================
router.get('/list', DisplayBookListPage);

// ===========================
//  Get Books Details Page.
// ===========================
//  GET the Book Details page in order to add a new Book
  
router.get('/add', DisplayBookAddPage);

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', ProcessBookAddPage);
 
// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', DisplayBookEditPage);

// POST - process the information passed from the details form and update the document
router.post('edit/:id', ProcessBookEditPage);

// GET - process the delete by user id
router.get('/delete/:id', DisplayBookDeletePage);

export default router;


