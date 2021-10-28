/*=============================================
  FileName: controllers/index.ts
  ProjectName: COMP229-005, Midterm Test
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-29
  ============================================*/

  import express from 'express';

  export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction){
      res.render('content/index', {title: 'Midterm Test', book: ''});
  };
