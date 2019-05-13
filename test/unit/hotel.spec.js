var expect = require('chai').expect

describe('Hotel', () => {
    let stub
    beforeEach(()=>{

        stub = new Hotel()
    })

    it('should contain the follow attribute', ()=>{
        expect(Object.keys(stub)).to.include(['name','city'])
    })

    describe('#updatePrice',()=>{

        //expect()
    })

})