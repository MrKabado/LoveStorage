import express from 'express'
import { getData } from '../controllers/getData.js';

const testingRoute = express.Router();

testingRoute.post('/send', getData)

export default testingRoute