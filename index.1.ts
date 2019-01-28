// 继承 class

class Animal {
    type: string;
    constructor (type) {
        this.type = type;
    }
    move(distanceInMeters: number = 0) {
        alert(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        alert('Woof! Woof!');
    }
}
const dog = new Dog('dog');
console.log(dog.type);
dog.bark();
dog.move(10);
class Cat extends Animal {
    bark() {
        alert('miao! miao!')
    }
}
const cat = new Cat('cat');
console.log(cat.type);
cat.bark();
cat.move(20);

