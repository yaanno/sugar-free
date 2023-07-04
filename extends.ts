export class Cat {
  name: string;

  speak() {
    console.log(`${this.name} meows`);
  }

  constructor(name: string) {
    this.name = name;
  }
}

export class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars`);
  }
}

const lion = new Lion("Mitzi");
console.log(lion.speak());
