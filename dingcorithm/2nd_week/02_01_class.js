class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`안녕하세요, 저는 ${this.name}이고 ${this.age}살입니다.`);
  }
  whatIsThis() {
    console.log(this);
  }
}

const person1 = new Person("혜민", 25);
console.log(person1);
console.log(person1.whatIsThis());
