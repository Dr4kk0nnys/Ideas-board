import express from 'express';
const router = express.Router();

import Database from '../utils/database';
const database = new Database(process.env.DATABASE_NAME);


router.post('/', (req, res) => {
    console.log(req.body);
    
    const { coordinates, text } = req.body;
    const { x, y } = coordinates;

    if (text === '')  {
        return res.send({"success": "false"});
    }
    
    database.append(`${x} ${y} ${text}`);
    res.send({"success": "true"});
});

router.post('/saved', (req, res) => {
    res.json(database.returnSaved());
});

router.delete('/', (req, res) => {
    const deleteData = database.delete(req.body.text);
    console.log(deleteData);
    
    database.write(deleteData);
});

export default router;