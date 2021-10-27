/*=============================================
  FileName: routes/business.ts
  ProjectName: COMP229-005, Assignment #2
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-22
  ============================================*/

  import express from 'express';
  import { DisplayBookListPage, DisplayBookEditPage, ProcessBookEditPage, DisplayBookAddPage, ProcessBookAddPage, DisplayBookDeletePage } from '../controllers/books';
  const router = express.Router();
  
  // Book-list : DISPLAY 
  router.get('/list', DisplayBookListPage);
  
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


