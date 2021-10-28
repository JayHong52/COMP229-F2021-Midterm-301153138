/*=============================================
  FileName: controllers/index.ts
  ProjectName: COMP229-005, Assignment #2
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-22
  ============================================*/

  import express from 'express';

  export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction){
      res.render('content/index', {title: 'Home', book: ''});
  };
