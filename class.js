class Animal{
    static type = 'ANIMAL'

    constructor(options){
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
    };
    voice(){
        console.log('hello')
    }
};

const animal = new Animal({
 name: 'animal',
 age: 6,
 hasTail: true
});

class Cat extends Animal {
    static type = "CAT"

    constructor(options){
        super(options)
        this.color = options.color
    }
    voice(){
        console.log('miay')
    }
};

const cat = new Cat({
    name: 'cat',
    age: 5,
    hasTail: true,
    color: 'black'
});
