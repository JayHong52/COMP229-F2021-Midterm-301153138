/*=============================================
  FileName: config/app.ts
  ProjectName: COMP229-005, Midterm Test
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-29
  ============================================*/

/*============================================*/
/* Installed 3rd Party Packages               */
/*============================================*/
import createError, { HttpError } from "http-errors";
import express from 'express';
import path from 'path';
import cookieParser from "cookie-parser";
import logger from 'morgan';
import MongoStore from 'connect-mongo';

/*============================================*/
/* Define Routers                             */
/*============================================*/
import indexRouter from '../routes/index'; 
import booksRouter from '../routes/books'; 

/*============================================*/
/* Database Configuration                     */
/*============================================*/
import mongoose from 'mongoose';
import * as DBConfig from './db';  

mongoose.connect((DBConfig.RemoteUri) ? DBConfig.RemoteUri : DBConfig.LocalUri);

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: (DBConfig.RemoteUri) ? DBConfig.RemoteUri : DBConfig.LocalUri
  }),
  secret: DBConfig.Secret,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 600000
  }
}

const DB = mongoose.connection;
DB.on('error', console.error.bind(console, 'Connection Error:'));
DB.once('open', ()=> {
  console.log('Connected to MongoDB: @' + DBConfig.HostName);
});

/*============================================*/
/* Express Configuration                      */
/*============================================*/
const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /client
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// route redirects
app.use('/', indexRouter);
app.use('/books', booksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: { message: any; status: any; }, req: { app: { get: (arg0: string) => string; }; }, res: { locals: { message: any; error: any; }; status: (arg0: any) => void; render: (arg0: string, arg1: { title: string; }) => void; }, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};  

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: "Oops, You have an error!"});
});

export default app;
