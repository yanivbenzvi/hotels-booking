import {Hotel} from '../../module/Hotel'

const expect  = require('chai').expect
const console = require('console')
describe('Hotel', () => {
    let stub
    beforeEach(() => {
        stub = new Hotel({
            id:                 '123',
            name:               'hotel1',
            address:            'bla bla bla',
            city:               'Jerusalem',
            price:              500,
            distanceFromCenter: 1.5,
        })
    })

    it('should contain the follow attribute', () => {
        //console.log(Object.keys(stub))
        expect(Object.keys(stub)).to.be.eql([
            'id', 'name', 'address', 'city', 'price', 'distanceFromCenter',
        ])
    })

    describe('#updatePrice', () => {
        it('update the price', () => {
            expect(stub.price).to.be.eql(500)
            stub.updatePrice(1000)
            expect(stub.price).to.be.eql(1000)
        })

        it('ignore negative number', () => {
            expect(stub.price).to.be.eql(500)
            stub.updatePrice(-1000)
            expect(stub.price).to.be.eql(500)
        })
    })

    describe('#getPriviousPrice',()=>{
        it('retrieve the previous prices', ()=>{
            expect(stub.price).to.be.eql(500)
        })
    })

})