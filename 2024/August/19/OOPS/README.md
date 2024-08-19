### 1. **Prototype-based Inheritance (Initial Example)**

```javascript
let animal = {
    eats: true
}

let rabbit = {
    jump: true
}

rabbit.__proto__ = animal
console.log(rabbit);
```

#### Explanation:
- **Objects**: The code starts with two objects, `animal` and `rabbit`.
  - `animal` has a property `eats` set to `true`.
  - `rabbit` has a property `jump` set to `true`.
  
- **Prototypal Inheritance**: The line `rabbit.__proto__ = animal` is setting the prototype of the `rabbit` object to `animal`.
  - This means that `rabbit` inherits properties from `animal`.
  - Now, if you try to access `rabbit.eats`, it will find the `eats` property in `animal` because `rabbit`'s prototype points to `animal`.

- **`console.log(rabbit)`**: This prints the `rabbit` object to the console, showing that it has a property `jump` and its prototype (`__proto__`) is linked to the `animal` object, so `rabbit` can also access the `eats` property indirectly.

### 2. **Class-based Inheritance (Main Code)**

#### Class Definitions:
```javascript
class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is Created");
    }

    eats() {
        console.log("Kha raha hooo");
    }

    jumps() {
        console.log("kood raha hoo");
    }
}
```

- **Class `Animal`**:
  - **Constructor**: The `constructor` method is a special method in classes that is called when an instance of the class is created.
    - It takes a `name` parameter and assigns it to the `name` property of the instance.
    - It also logs `"Object is Created"` to the console when an instance is created.
  - **Methods**: 
    - `eats()` and `jumps()` are methods defined in the `Animal` class that print `"Kha raha hooo"` and `"kood raha hoo"` respectively when called.

#### Subclass Definition:
```javascript
class Lion extends Animal {
    constructor(name, species) {
        super(name)
        this.sp = species
        console.log("Lion object is created");
    }
}
```

- **Class `Lion` (Inheritance)**:
  - **Inheritance**: `Lion` is a subclass of `Animal`, which means it inherits all properties and methods from the `Animal` class.
  - **Constructor**: 
    - The constructor of `Lion` takes two parameters: `name` and `species`.
    - The `super(name)` call is used to invoke the constructor of the parent class (`Animal`) with the `name` parameter. This ensures that the `name` property is properly initialized in the `Animal` part of the `Lion` object.
    - The `species` parameter is assigned to the `sp` property of the `Lion` instance.
    - `"Lion object is created"` is logged to the console.

#### Creating Instances:
```javascript
let a = new Animal("Nobita")
let l = new Lion("Seera", "SnowKing")
console.log(a);
console.log(l);
```

- **Creating an instance of `Animal`**:
  - `let a = new Animal("Nobita")`: This creates an instance of `Animal` with the `name` property set to `"Nobita"`.
  - The constructor of `Animal` is invoked, and `"Object is Created"` is logged to the console.
  - `a` now refers to an `Animal` object with the `name` property `"Nobita"`.

- **Creating an instance of `Lion`**:
  - `let l = new Lion("Seera", "SnowKing")`: This creates an instance of `Lion` with the `name` property `"Seera"` and `sp` (species) property `"SnowKing"`.
  - The constructor of `Lion` first invokes the constructor of `Animal` (due to `super(name)`), initializing the `name` property.
  - `"Object is Created"` (from the `Animal` constructor) and `"Lion object is created"` (from the `Lion` constructor) are logged to the console.
  - `l` now refers to a `Lion` object with the `name` property `"Seera"` and `sp` property `"SnowKing"`.

#### Final Output:
```javascript
console.log(a);
console.log(l);
```

- The `console.log(a)` will print the `Animal` object `a`, showing its `name` property.
- The `console.log(l)` will print the `Lion` object `l`, showing its `name` and `sp` properties, along with inherited methods from `Animal`.

### Summary:
- The code demonstrates both prototype-based inheritance (using `__proto__`) and class-based inheritance (using `class` and `extends`).
- The `Animal` class serves as a base class, and `Lion` extends it, inheriting properties and methods.
- Constructors in both classes help initialize properties and provide messages to the console upon object creation.
- This code structure is fundamental in object-oriented programming for modeling relationships and reusing code effectively.
