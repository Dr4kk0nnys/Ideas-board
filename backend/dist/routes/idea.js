"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const database_1 = __importDefault(require("../utils/database"));
const database = new database_1.default(process.env.DATABASE_NAME);
const fs_1 = __importDefault(require("fs"));
router.post('/', (req, res) => {
    const { coordinates } = req.body;
    fs_1.default.writeFileSync("database.txt", coordinates);
    res.send(req.body);
});
exports.default = router;
