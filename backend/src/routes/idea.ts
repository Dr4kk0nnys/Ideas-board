import express from 'express';
const router = express.Router();

import Database from '../utils/database';
const database = new Database(process.env.DATABASE_NAME);


router.get('/', (req, res) => {
    res.send(database.read());
});

router.post('/', (req, res) => {
    // fs.writeFileSync("./test.txt", "Hello World");
    res.send({"Test": "true"});
});

export default router;