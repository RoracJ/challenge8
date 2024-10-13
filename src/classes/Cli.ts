import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

class Cli {
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  static generateVin(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  async chooseVehicle(): Promise<void> {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedVehicleVin',
        message: 'Select a vehicle to perform an action on',
        choices: this.vehicles.map((vehicle) => ({
          name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
          value: vehicle.vin,
        })),
      },
    ]);

    this.selectedVehicleVin = answers.selectedVehicleVin;
    await this.performActions(); // Call to performActions
  }

  async createVehicle(): Promise<void> {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'vehicleType',
        message: 'Select a vehicle type',
        choices: ['Car', 'Truck', 'Motorbike'],
      },
    ]);

    if (answers.vehicleType === 'Car') {
      await this.createCar();
    } else if (answers.vehicleType === 'Truck') {
      await this.createTruck();
    } else if (answers.vehicleType === 'Motorbike') {
      await this.createMotorbike();
    }
  }

  async createCar(): Promise<void> {
    let validInput = false; // Flag to track if input is valid
  
    while (!validInput) {
      const answers = await inquirer.prompt([
        { type: 'input', name: 'color', message: 'Enter Color' },
        { type: 'input', name: 'make', message: 'Enter Make' },
        { type: 'input', name: 'model', message: 'Enter Model' },
        { type: 'input', name: 'year', message: 'Enter Year' },
        { type: 'input', name: 'weight', message: 'Enter Weight' },
        { type: 'input', name: 'topSpeed', message: 'Enter Top Speed' },
      ]);
  
      // Validate string inputs
      if (!answers.color || !answers.make || !answers.model) {
        console.log('Please enter valid non-empty values for color, make, and model.');
        continue; // Re-prompt the user
      }
  
      const year = parseInt(answers.year);
      const weight = parseInt(answers.weight);
      const topSpeed = parseInt(answers.topSpeed);
  
      // Validate numeric inputs
      if (isNaN(year) || year <= 0 || 
      isNaN(weight) || weight <= 0 || 
      isNaN(topSpeed) || topSpeed <= 0
    ) {
        console.log('Please enter valid positive numeric values for year, weight, and top speed.');
        continue; // Re-prompt the user
      }
  
      // Create a Car instance
      const car = new Car(
        Cli.generateVin(), // Generate VIN
        answers.color,
        answers.make,
        answers.model,
        year,
        weight,
        topSpeed,
        [] // Assuming an empty array for optional properties, adjust as necessary
      );
  
      this.vehicles.push(car);
      this.selectedVehicleVin = car.vin;
      validInput = true; // Set the flag to true as we have valid input
      await this.performActions(); // Call to performActions
    }
  }
  
  async createTruck(): Promise<void> {
    let validInput = false; // Flag to track if input is valid
  
    while (!validInput) {
      const answers = await inquirer.prompt([
        { type: 'input', name: 'color', message: 'Enter Color' },
        { type: 'input', name: 'make', message: 'Enter Make' },
        { type: 'input', name: 'model', message: 'Enter Model' },
        { type: 'input', name: 'year', message: 'Enter Year' },
        { type: 'input', name: 'weight', message: 'Enter Weight' },
        { type: 'input', name: 'topSpeed', message: 'Enter Top Speed' },
        { type: 'input', name: 'towingCapacity', message: 'Enter Towing Capacity' },
        { type: 'input', name: 'wheelDiameter', message: 'Enter Wheel Diameter' },
        { type: 'input', name: 'wheelBrand', message: 'Enter Wheel Brand' },
      ]);
  
      // Validate string inputs
      if (!answers.color || !answers.make || !answers.model || !answers.wheelBrand) {
        console.log('Please enter valid non-empty values for color, make, model, and wheel brand.');
        continue; // Re-prompt the user
      }
  
      const year = parseInt(answers.year);
      const weight = parseInt(answers.weight);
      const topSpeed = parseInt(answers.topSpeed);
      const towingCapacity = parseInt(answers.towingCapacity);
      const wheelDiameter = parseInt(answers.wheelDiameter);
  
      // Validate numeric inputs
      if (
        isNaN(year) || year <= 0 ||
        isNaN(weight) || weight <= 0 ||
        isNaN(topSpeed) || topSpeed <= 0 ||
        isNaN(towingCapacity) || towingCapacity <= 0 ||
        isNaN(wheelDiameter) || wheelDiameter <= 0
      ) {
        console.log('Please enter valid positive numeric values for year, weight, top speed, towing capacity, and wheel diameter.');
        continue; // Re-prompt the user
      }
  
      // Create an array of Wheel objects
      const wheels = [
        new Wheel(wheelDiameter, answers.wheelBrand),
        new Wheel(wheelDiameter, answers.wheelBrand),
        new Wheel(wheelDiameter, answers.wheelBrand),
        new Wheel(wheelDiameter, answers.wheelBrand),
      ];
  
      // Create a Truck instance
      const truck = new Truck(
        Cli.generateVin(),
        answers.color,
        answers.make,
        answers.model,
        year,
        weight,
        topSpeed,
        wheels,          // Pass the array of Wheel objects
        towingCapacity   // Pass the towing capacity
      );
  
      this.vehicles.push(truck); // Add the truck to the vehicles array
      this.selectedVehicleVin = truck.vin; // Set the selected VIN
      validInput = true; // Set the flag to true as we have valid input
      await this.performActions(); // Call to performActions
    }
  }
  
  
  async createMotorbike(): Promise<void> {
    let validInput = false; // Flag to track if input is valid

    while (!validInput) {
      const answers = await inquirer.prompt([
        { type: 'input', name: 'color', message: 'Enter Color' },
        { type: 'input', name: 'make', message: 'Enter Make' },
        { type: 'input', name: 'model', message: 'Enter Model' },
        { type: 'input', name: 'year', message: 'Enter Year' },
        { type: 'input', name: 'weight', message: 'Enter Weight' },
        { type: 'input', name: 'topSpeed', message: 'Enter Top Speed' },
        { type: 'input', name: 'frontWheelDiameter', message: 'Enter Front Wheel Diameter' },
        { type: 'input', name: 'frontWheelBrand', message: 'Enter Front Wheel Brand' },
        { type: 'input', name: 'rearWheelDiameter', message: 'Enter Rear Wheel Diameter' },
        { type: 'input', name: 'rearWheelBrand', message: 'Enter Rear Wheel Brand' },
      ]);

      // Validate string inputs
      if (!answers.color || !answers.make || !answers.model || !answers.frontWheelBrand || !answers.rearWheelBrand) {
        console.log('Please enter valid non-empty values for color, make, model, and wheel brands.');
        continue; // Re-prompt the user
      }

      const year = parseInt(answers.year);
      const weight = parseInt(answers.weight);
      const topSpeed = parseInt(answers.topSpeed);
      const frontWheelDiameter = parseInt(answers.frontWheelDiameter);
      const rearWheelDiameter = parseInt(answers.rearWheelDiameter);

      // Check for invalid numeric values
      if (
        isNaN(year) || year <= 0 ||
        isNaN(weight) || weight <= 0 ||
        isNaN(topSpeed) || topSpeed <= 0 ||
        isNaN(frontWheelDiameter) || frontWheelDiameter <= 0 ||
        isNaN(rearWheelDiameter) || rearWheelDiameter <= 0
      ) {
        console.log('Please enter valid positive numeric values for year, weight, top speed, and wheel diameters.');
        continue; // Re-prompt the user
      }

      // Create Wheel instances
      const frontWheel = new Wheel(frontWheelDiameter, answers.frontWheelBrand);
      const rearWheel = new Wheel(rearWheelDiameter, answers.rearWheelBrand);

      // Create a Motorbike instance
      const motorbike = new Motorbike(
        Cli.generateVin(),
        answers.color,
        answers.make,
        answers.model,
        year,
        weight,
        topSpeed,
        [frontWheel, rearWheel] // Passes front and rear wheels in an array
      );

      // Add the motorbike to the vehicles array
      this.vehicles.push(motorbike);
      this.selectedVehicleVin = motorbike.vin;
      validInput = true; // Set the flag to true as we have valid input
      await this.performActions(); // Call to performActions
    }
  }

  async startCli(): Promise<void> {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'CreateOrSelect',
        message: 'Would you like to create a new vehicle or select an existing one?',
        choices: ['Create Vehicle', 'Select Vehicle', 'Exit'],
      },
    ]);

    switch (answers.CreateOrSelect) {
      case 'Create Vehicle':
        await this.createVehicle();
        break;
      case 'Select Vehicle':
        await this.chooseVehicle();
        break;
      case 'Exit':
        this.exit = true;
        break;
    }

    if (!this.exit) {
      await this.startCli(); // Restart CLI
    }
  }

  async performActions(): Promise<void> {
    if (!this.selectedVehicleVin) {
      console.log("No vehicle selected.");
      return;
    }

    const selectedVehicle = this.vehicles.find(vehicle => vehicle.vin === this.selectedVehicleVin);

    if (!selectedVehicle) {
      console.log("Selected vehicle not found.");
      return;
    }

    // Use type narrowing to determine the type of selectedVehicle
    if (selectedVehicle instanceof Car) {
      console.log(`Performing actions on Car: ${selectedVehicle.make} ${selectedVehicle.model}`);
      // Add specific actions for Car here
    } else if (selectedVehicle instanceof Truck) {
      console.log(`Performing actions on Truck: ${selectedVehicle.make} ${selectedVehicle.model}`);
      // Add specific actions for Truck here
    } else if (selectedVehicle instanceof Motorbike) {
      console.log(`Performing actions on Motorbike: ${selectedVehicle.make} ${selectedVehicle.model}`);
      // Add specific actions for Motorbike here
    } else {
      console.log("Unknown vehicle type.");
    }

    // Optionally, after performing actions, allow the user to go back to vehicle selection or exit
    const backOrExit = await inquirer.prompt([
      {
        type: 'list',
        name: 'nextAction',
        message: 'What would you like to do next?',
        choices: ['Back to Vehicle Selection', 'Exit'],
      },
    ]);

    if (backOrExit.nextAction === 'Back to Vehicle Selection') {
      this.selectedVehicleVin = undefined; // Reset selected vehicle
      await this.startCli(); // Restart CLI
    } else {
      this.exit = true; // Set exit flag
    }
  }
}

export default Cli;
