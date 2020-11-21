import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express()


// Port usually is 3000.
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));