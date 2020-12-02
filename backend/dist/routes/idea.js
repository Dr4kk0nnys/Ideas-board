"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const database_1 = __importDefault(require("../utils/database"));
const database = new database_1.default(process.env.DATABASE_NAME);
router.post('/', (req, res) => {
    console.log(req.body);
    const { coordinates, text } = req.body;
    const { x, y } = coordinates;
    if (text === '') {
        return res.send({ "success": "false" });
    }
    database.append(`${x} ${y} ${text}`);
    res.send({ "success": "true" });
});
router.post('/saved', (req, res) => {
    res.json(database.returnSaved());
});
router.delete('/', (req, res) => {
    const deleteData = database.delete(req.body.text);
    console.log(deleteData);
    database.write(deleteData);
});
exports.default = router;
