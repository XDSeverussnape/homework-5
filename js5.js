class Car {
  static getSpecs(car) {
    console.log(car.maxSpeed, car.speed, car.isOn, car.distance, car.price);
  }
  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get pri() {
    return this.price;
  }

  set pri(price) {
    this.price = price;
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    return (this.isOn = false);
  }

  accelerate(value) {
    if (this.speed < this.maxSpeed) {
      return (this.speed = this.speed + value);
    } else {
      console.log("Speed is Up");
    }
  }

  decelerate(value) {
    if (this.speed > 0) {
      return (this.speed = this.speed - value);
    } else {
      console.log("Speed is Down");
    }
  }

  drive(hours) {
    if (this.isOn) {
      return (this.distance = this.speed * hours);
    } else {
      console.log("Car not turnOn");
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
