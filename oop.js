function Airplane(capacity, type){
	
	if(capacity !== undefined) this.capacity = capacity
    else return undefined;
    
    if(type !== undefined) this.type = type
    else return undefined

    var mileage = 1000
	var airworthy = true

	this.getMileage = function(){
		return mileage
	}
}

Airplane.prototype.numberOfPassengers = function(){
	console.log("The total number of passengers the plane can carry is " + this.capacity)

}

Airplane.prototype.flightDistance = function(){
	if(this.type = "Jumbo") console.log("Can fly really long distances");
	else console.log("Can only do inter - state trips");

}
function Cessna(capacity, type){
	if(capacity !== undefined) this.capacity = capacity
    else return undefined;
    
    if(type !== undefined) this.type = type
    else return undefined
}
//creating a Cessna Class that inherits from Airplane
Cessna.prototype = new Airplane();

Cessna.prototype.showFare =function(category){
	if(category === "adult") return 10000;
	else return 5000;
}
var boeing = new Airplane(500, "jumbo");
var cessna = new Cessna(100, "small");

console.log("Your fare is " + cessna.showFare("adult"));
console.log("The plane's mileage is " + boeing.getMileage());
boeing.airworthy //should be undefined since it's a private property