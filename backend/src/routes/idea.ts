import express from 'express';
const router = express.Router();

import Database from '../utils/database';
const database = new Database(process.env.DATABASE_NAME);


router.post('/', (req, res) => {
    // const { coordinates } = req.body;

    console.log(req.body);
    console.log(req.query);
    console.log(req.params);
    
    console.log(req.body.coordinates);
    
    res.send({"": ""});
});

export default router;