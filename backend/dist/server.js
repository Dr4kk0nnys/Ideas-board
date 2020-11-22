"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const idea_1 = __importDefault(require("./routes/idea"));
app.use('/idea', idea_1.default);
// Port is usually 8000
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
