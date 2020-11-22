import fs from 'fs';


class Database {
    private databaseFileName: string;

    constructor(fileName: string) {
        this.databaseFileName = fileName;
    }

    read() {
        return fs.readFileSync(this.databaseFileName, "utf-8");
    }

    write(data: string) {
        return fs.writeFileSync(this.databaseFileName, data);
    }
}

export default Database;