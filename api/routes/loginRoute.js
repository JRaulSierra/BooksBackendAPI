import { Router } from "express";
import {login} from '../controllers/index.js';
import {isLoggedIn} from '../middlewares/index.js';

export const router = Router();

/* route who get the username and the password and send it to userController
    we use the middleware isLoggedIn to validate the username and password was get it*/
routerLogin.get('/login', isLoggedIn, login.getLogin);

export {routerLogin};
