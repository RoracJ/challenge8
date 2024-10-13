// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// Motorbike class that extends Vehicle class
class Motorbike extends Vehicle {
    // Constructor for the Motorbike class
    constructor(vin, color, make, model, year, weight, topSpeed, wheels // Make wheels optional to allow for the default wheels
    ) {
        // Call the constructor of the parent class, Vehicle
        super(); // Call to the parent class constructor
        // Initialize properties of the Motorbike class
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // Check if the wheels array has 2 elements
        if (!wheels || wheels.length !== 2) {
            this.wheels = [new Wheel(), new Wheel()]; // Create 2 new Wheel objects
        }
        else {
            this.wheels = wheels;
        }
    }
    // Implement the wheelie method
    wheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    // Override the printDetails method from the Vehicle class
    printDetails() {
        // Call the printDetails method of the parent class, Vehicle
        super.printDetails();
        // Log the details of the Motorbike
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`Color: ${this.color}`);
        // Print details of the wheels
        this.wheels.forEach((wheel, index) => {
            console.log(`Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`);
        });
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
