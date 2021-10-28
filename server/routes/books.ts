/*=============================================
  FileName: routes/books.ts
  ProjectName: COMP229-005, Midterm Test
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-29
  ============================================*/

  import express from 'express';
  import { DisplayBookListPage, DisplayBookEditPage, ProcessBookEditPage, DisplayBookAddPage, ProcessBookAddPage, DisplayBookDeletePage } from '../controllers/books';
  const router = express.Router();
  
  // Book-list : DISPLAY 
  router.get('/', DisplayBookListPage);
  
  // Book-edit : DISPLAY
  router.get('/edit/:id', DisplayBookEditPage);
  
  // Book-edit : PROCESS
  router.post('/edit/:id', ProcessBookEditPage);
    
  // Book-add : DISPLAY
  router.get('/add', DisplayBookAddPage);
  
  // Book-add : PROCESS 
  router.post('/add', ProcessBookAddPage);
  
  // Book-delete : PROCESS 
  router.get('/delete/:id', DisplayBookDeletePage);
  
  export default router;


