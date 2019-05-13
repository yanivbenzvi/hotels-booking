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
}