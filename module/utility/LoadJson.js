import fs from 'fs'
export class LoadJson {
    static async loadFile(filePath) {
        const data    = await fs.readFileSync(filePath,'utf8')
        const console = require('console')
        return JSON.parse(data);
    }
}