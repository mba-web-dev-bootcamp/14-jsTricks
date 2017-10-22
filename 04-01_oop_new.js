function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}

var firstHouse = new House(2, 2, 1000);
console.log("firstHouse.bedrooms = " + firstHouse.bedrooms);