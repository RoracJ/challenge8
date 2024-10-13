import Vehicle from "./Vehicle";
import Wheel from "./Wheel";

// Car class that implements Vehicle interface
class Car implements Vehicle {
  // Declare properties of the Car class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  started: boolean = false;
  currentSpeed: number = 0;  // Set default value

  // Constructor for the Car class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels?: Wheel[], // Make wheels optional to allow for the default wheels
  ) {
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
    } else {
      this.wheels = wheels;
    }
  }

  start(): void {
    throw new Error('Method not implemented.');
  }
  accelerate(change: number): void {
    throw new Error('Method not implemented.');
  }
  decelerate(change: number): void {
    throw new Error('Method not implemented.');
  }
  stop(): void {
    throw new Error('Method not implemented.');
  }
  turn(direction: string): void {
    throw new Error('Method not implemented.');
  }
  reverse(): void {
    throw new Error('Method not implemented.');
  }

  // Implement the printDetails method from the Vehicle interface
  printDetails(): void {
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
      console.log(
        `Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`
      );
    });
  }
}

// Export the Car class as the default export
export default Car;
