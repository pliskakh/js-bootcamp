let restaurant = {
  name: 'KFC',
  guestCapacity: 75,
  guestCount: 0,
  checkAviability: function (partySize) {
    let setsLeft = this.guestCapacity - this.guestCount;
    return partySize <= setsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount += partySize;
  },
  removeParty: function (partySize) {
    this.guestCount -= partySize;
  }
};

restaurant.seatParty(75);
restaurant.removeParty(5);

let status = restaurant.checkAviability(2);
console.log(status);