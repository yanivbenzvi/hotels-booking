import {User} from '../../module/User'
import {Hotel} from '../../module/Hotel'

const expect  = require('chai').expect
const console = require('console')
describe('User', () => {
    let stub
    beforeEach(() => {
        stub = new User({
            id:                 '123',
            mail:            'bla bla bla',
        })
    })

    it('should contain the follow attribute', () => {
        //console.log(Object.keys(stub))
        expect(Object.keys(stub)).to.be.eql([
            'id', 'mail', 'hotelList'
        ])
    })

    describe('#bookRoom', () => {
        it('Receive a hotel and adding it to user hotel list', () => {
            expect(stub.hotelList.length).to.be.eql(0)
            stub.bookRoom(new Hotel({id: '123', name: 'hotel1', address: 'bla bla bla', city: 'Jerusalem', price: 500, distanceFromCenter: 1.5}))
            expect(stub.hotelList.length).to.be.eql(1)
        })

    })


})