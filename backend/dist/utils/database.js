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
    read() {
        return fs_1.default.readFileSync(this.databaseFileName, "utf-8");
    }
    write(data) {
        return fs_1.default.writeFileSync(this.databaseFileName, data);
    }
}
exports.default = Database;
