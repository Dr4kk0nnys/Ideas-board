import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import idea from './routes/idea';


app.use('/idea', idea);

// Port is usually 8000
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));