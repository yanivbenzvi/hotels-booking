import {LoadJson} from './utility/LoadJson'

export class Hotel {
    /**
     *
     * @param {Object} Hotel
     */
    constructor(Hotel = {}) {
        const {id, name, address, city, price, distanceFromCenter} = Hotel
        this.id                                                    = id
        this.name                                                  = name
        this.address                                               = address
        this.city                                                  = city
        this.price                                                 = price
        this.distanceFromCenter                                    = distanceFromCenter
    }

    /**
     * Update hotel price.
     * @param {Number} newPrice
     */
    updatePrice(newPrice) {
        if (newPrice > 0) {
            this.price = newPrice
        }
    }

    async getPriviousPrices() {
        let hotelData = await LoadJson.loadFile('C:\\Users\\Yaniv\\Documents\\dev-colleage\\hotels-booking\\test\\price_date.json')
        hotelData     = hotelData.filter(hotel => {
            return hotel.Id === this.id
        })
        hotelData.sort((a, b) => {
            a = a.Update_date
            b = b.Update_date
            return a > b ? -1 : a < b ? 1 : 0
        })
        return hotelData
    }

    async getLastPrice() {
        /*let hotelData = await LoadJson.loadFile('C:\\Users\\Yaniv\\Documents\\dev-colleage\\hotels-booking\\test\\price_date.json')
        hotelData     = hotelData.filter(hotel => {
            return hotel.Id === this.id
        })
        console.log(hotelData)
        hotelData.sort((a, b) => {
            a = a.Update_date
            b = b.Update_date
            return a > b ? -1 : a < b ? 1 : 0
        })
        console.log(hotelData)
         return hotelData[0]
        */
        const allPrices = await this.getPriviousPrices()
        return allPrices[0]
    }
}