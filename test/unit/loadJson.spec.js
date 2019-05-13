import {LoadJson} from '../../module/utility/LoadJson'
const expect  = require('chai').expect
const console = require('console')

describe('LoadJson', () => {

    describe('#loadFile', () => {
        it('retrieve json file from file path', async () => {
            const jsonObject = await LoadJson.loadFile('C:\\Users\\Yaniv\\Documents\\dev-colleage\\hotels-booking\\test\\hotels.json')
            expect(jsonObject).to.be.an('array').with.length(20)
        })
    })
})