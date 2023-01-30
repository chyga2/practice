const people = [
    {
        name:'андрей',
        age: 11 ,
        budget: 3700
    },
    {
        name:'петя',
        age: 23 ,
        budget: 4200
    },
    {
        name:'коля',
        age: 34 ,
        budget: 1100
    },
    {
        name:'вася',
        age: 42 ,
        budget: 2800
    },
]
// цикл
// for(let i = 0; i < people.length; i++){
//     console.log(people[i]);
// };

// for of
// for(let person of people){
//     console.log(person);
// };

// forEach
// people.forEach(person => console.log(person))

//map
// const peopleName = people.map(person => person.name
// );
// console.log(peopleName)

// filter
// const adults = people.filter(person => {
//     if (person.age >= 18){
//         return true
//     }
// });
//.......................
// const adults = people.filter(person => person.age >= 18);
// console.log(adults);

//reduce
// const amount = people.reduce((acc, person) => acc + person.budget, 0);
// console.log(amount)

//find
// const vasya = people.find(person => person.name === "вася");
// console.log(vasya);

//findIndex
// const vasyaIndex = people.findIndex(person => person.name === "вася");
// console.log(vasyaIndex);