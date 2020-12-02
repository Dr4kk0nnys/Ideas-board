"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class Database {
    constructor(fileName) {
        this.databaseFileName = fileName;
    }
    append(data) {
        return fs_1.default.appendFileSync(this.databaseFileName, data + '\n');
    }
    returnSaved() {
        const lines = fs_1.default.readFileSync(this.databaseFileName);
        const data = [];
        for (const line of lines.toString().split('\n')) {
            if (line !== '') {
                const [x, y, ...textArray] = line.split(' ');
                const text = textArray.join(' ');
                data.push({ x, y, text });
            }
        }
        return data;
    }
    delete(text) {
        const lines = this.returnSaved();
        const data = [];
        for (const line of lines) {
            if (line.text !== text) {
                data.push(line);
            }
        }
        return data;
    }
    write(data) {
        if (data.length >= 1) {
            fs_1.default.writeFileSync(this.databaseFileName, ''); // clean the file
            for (const object of data) {
                fs_1.default.appendFileSync(this.databaseFileName, `${object.x} ${object.y} ${object.text}\n`);
            }
            return;
        }
        return fs_1.default.writeFileSync(this.databaseFileName, '');
    }
}
exports.default = Database;
