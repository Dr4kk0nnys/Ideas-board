"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// Port usually is 3000.
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
//# sourceMappingURL=main.js.map