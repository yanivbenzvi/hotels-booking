import {SearchHotel} from '../../module/SearchHotel'
import {LoadJson}    from '../../module/utility/LoadJson'
import {Hotel}       from '../../module/Hotel'

const expect  = require('chai').expect
const console = require('console')
describe('SearchHotel', () => {
    let stub
    let hotels
    before(async () => {
        const hotelData = await LoadJson.loadFile('C:\\Users\\Yaniv\\Documents\\dev-colleage\\hotels-booking\\test\\hotels.json')
        hotels = hotelData.map(hotel => new Hotel({
            id:                 hotel.Id,
            name:               hotel.Name,
            address:            hotel.Address,
            city:               hotel.City,
            distanceFromCenter: hotel.Distance_from_city,
        }))
        hotels.forEach(hotel => hotel.getLastPrice())
    })
    beforeEach(() => {

        //stub = new SearchHotel({})
    })
    describe('searchByPrice', () => {
        it('bla',()=>{
            expect(1).to.be.eql(1)
        })
    })


})