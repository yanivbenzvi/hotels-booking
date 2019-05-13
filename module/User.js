import {Hotel} from './Hotel'


export class User {
    /**
     *
     * @param {Object} User
     */
    constructor(User = {}) {
        /**Refactoring
         * constructor(id, mail) {
         *this.id = id
         *this.mail = mail
         * }
         */
        const {id, mail} = User
        this.id                                                    = id
        this.mail                                                  = mail
        this.hotelList                                             = []
    }

    /**
     * Adding new hotel to hotel list.
     * @param {Hotel} newHotel
     */
    bookRoom(newHotel){
        this.hotelList.push(newHotel)
    }
}