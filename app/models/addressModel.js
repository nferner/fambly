class AddressModel {
  constructor ({addressId, familyId, streetOne, streetTwo, city, state, zip, country, phoneHome}) {
    this.addressId = addressId
    this.familyId = familyId
    this.streetOne = streetOne
    this.streetTwo = streetTwo
    this.city = city
    this.state = state
    this.zip = zip
    this.country = country
    this.phoneHome = phoneHome
  }
}

module.exports = AddressModel
