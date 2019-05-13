import {jsonfile} from 'jsonfile'

export class LoadJson  {
    static loadFile(fileName){
        jsonfile.readFile(fileName)
            .then(obj => console.dir(obj))
            .catch(error => console.error(error))
    }
}