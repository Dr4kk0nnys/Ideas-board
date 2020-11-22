import fs from 'fs';


class Database {
    private databaseFileName: string;

    constructor(fileName: string) {
        this.databaseFileName = fileName;
    }

    read() {
        return fs.readFileSync(this.databaseFileName, "utf-8");
    }
}

export default Database;