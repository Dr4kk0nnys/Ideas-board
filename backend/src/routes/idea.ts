import express from 'express';
const router = express.Router();

import Database from '../utils/database';
const database = new Database(process.env.DATABASE_NAME);


router.post('/', (req, res) => {
    console.log('Test');
    
    console.log(req.body);
    
    const { coordinates, text } = req.body;
    const { x, y } = coordinates;
    
    database.append(`${x} ${y} "${text}"`);
    res.send({"success": "true"});
});

export default router;