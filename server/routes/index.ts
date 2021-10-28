/*=============================================
  FileName: controllers/index.ts
  ProjectName: COMP229-005, Midterm Test
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-29
  ============================================*/

import express from 'express';
import { DisplayHomePage } from '../controllers';

const router = express.Router();

router.get('/', DisplayHomePage);

export default router; 
