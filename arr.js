const numbers = [2, 3, 11, 15, 20, 3, 5, 8, 10, 16, 2, 11, 14, 15, 18];
const people = [
    {
        name:'андрей',
        age: 11 ,
        budget: 3700,
        working: true
    },
    {
        name:'петя',
        age: 23 ,
        budget: 4200,
        working: true
    },
    {
        name:'коля',
        age: 34 ,
        budget: 1100,
        working: false
    },
    {
        name:'вася',
        age: 42 ,
        budget: 2800,
        working: true
    },
]

const documents = [{
    content: "Ты был мне как брат! Я любил тебя!",
    author: "Obi-Wan Kenobi",
    date: "2017-01-17 07:13:07"
}, {
    content: "База повстанцев находится на Дантуине.",
    author: "Leia Organa",
    date: "1999-02-19 16:56:11"
}, {
    content: "Страх открывает доступ к темной стороне! Страх рождает гнев, гнев рождает ненависть, ненависть — залог страданий.",
    author: "Yoda",
    date: "2019-11-27 21:33:56"
}];
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

// еще reduce
// const getAverage = (numbers) => {
//     const total = numbers.reduce((acc, number) => {
//         return acc + number;
//     }, 0);
//     return total / numbers.length;
// }
// console.log(getAverage(numbers));

// const countWorking = (people) => {
//     return people.reduce((acc, person) => {
//         if(person.working){
//             acc++;
//         }
//         return acc;
//     }, 0);
// }
// console.log(countWorking(people));

// const getOnlyWorking = (people) => {
//     return people.reduce((acc, person) => {
//         if(person.working){
//             acc.push(person.name);
//         }
//         return acc;
//     }, []);
// }
// console.log(getOnlyWorking(people));

const composeDocuments = (documents) => {
    return documents.reduce((acc, document) => {
       acc.content = acc.content + " " + document.content;
        acc.authors.push(document.author);
        if(!acc.date ||
            new Date(acc.date) <= new Date(document.date)){
            acc.date = document.date;
        }
        return acc;
    }, {
        content: "",
        authors: [],
        date: null
    });
}
console.log(composeDocuments(documents));