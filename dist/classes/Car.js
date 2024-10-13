import Wheel from "./Wheel";
// Car class that implements Vehicle interface
class Car {
    // Constructor for the Car class
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        this.started = false;
        this.currentSpeed = 0; // Set default value
        // Initialize properties of the Car class
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // Check if the wheels array has 4 elements
        if (!wheels || wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    start() {
        throw new Error('Method not implemented.');
    }
    accelerate(change) {
        throw new Error('Method not implemented.');
    }
    decelerate(change) {
        throw new Error('Method not implemented.');
    }
    stop() {
        throw new Error('Method not implemented.');
    }
    turn(direction) {
        throw new Error('Method not implemented.');
    }
    reverse() {
        throw new Error('Method not implemented.');
    }
    // Implement the printDetails method from the Vehicle interface
    printDetails() {
        // Print details of the Car class
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        // Print details of the wheels
        this.wheels.forEach((wheel, index) => {
            console.log(`Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`);
        });
    }
}
// Export the Car class as the default export
export default Car;
