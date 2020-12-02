import fs from 'fs';


class Database {
    private databaseFileName: string;

    constructor(fileName: string) {
        this.databaseFileName = fileName;
    }

    append(data: string) {
        return fs.appendFileSync(this.databaseFileName, data + '\n');
    }

    returnSaved() {
        const lines = fs.readFileSync(this.databaseFileName);
        
        const data = [];
        for (const line of lines.toString().split('\n')) {
            if (line !== '') {
                const [ x, y, ...textArray ] = line.split(' ');
                const text = textArray.join(' ');
                data.push({x, y, text});
            }
        }

        return data;
    }

    delete(text: string) {
        const lines = this.returnSaved();

        const data = [];
        for (const line of lines) {
            if (line.text !== text) {
                data.push(line);
            }
        }
        return data;
    }

    write(data: { x: string; y: string; text: string; }[]) {
        if (data.length >= 1) {
            fs.writeFileSync(this.databaseFileName, ''); // clean the file

            for (const object of data) {
                fs.appendFileSync(this.databaseFileName, `${object.x} ${object.y} ${object.text}\n`);
            }
            return;
        }
        return fs.writeFileSync(this.databaseFileName, '');
    }
}

export default Database;