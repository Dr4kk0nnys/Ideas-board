import express from 'express';
const router = express.Router();

import Database from '../utils/database';
const database = new Database(process.env.DATABASE_NAME);

import fs from 'fs';


router.post('/', (req, res) => {
    const { coordinates, text } = req.body;
    console.log(coordinates, text);

    res.send(req.body);
});

export default router;