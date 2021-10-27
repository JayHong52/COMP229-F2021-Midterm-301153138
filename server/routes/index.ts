/*=============================================
  FileName: controllers/index.ts
  ProjectName: COMP229-005, Assignment #2
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-22
  ============================================*/

import express from 'express';
import book from '../models/books';
import mongoose from 'mongoose';
import { DisplayHomePage } from '../controllers';

const router = express.Router();

router.get('/', DisplayHomePage);

// define the game model

/* GET home page. wildcard /
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});
*/
export default router; 
