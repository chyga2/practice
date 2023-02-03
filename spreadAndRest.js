const names = ['Дима', 'Вася', 'Петя', 'Олег']
const surname = ['Чигирев','Терентьев','Спасский','Корсаков']
const personOne = {
    name: 'Dima',
    surname: "Chigirev"
};
const personTwo = {
    name: 'Vasia',
    surname: 'Terentev'
}

const citiesRussiaPopulation = {
    Moscow: 20,
    Omsck: 5
}
const citiesEuropePopulation = {
    Paris: 3,
    Praha: 2
}

// spread

// console.log(...names)
// const a = [...names, ...surname] 
// console.log(a)

// console.log({...personOne, ...personTwo})
// console.log({...citiesEuropePopulation, ...citiesRussiaPopulation})

//rest

function sum(a, b, ...rest) {
    return a + b + rest.reduce((a, i) => a + i, 0)
  }
  
  const nums = [1, 2, 3, 4, 5, 6, 7, 8]
  
  console.log(sum(...nums))
  
  // const a = nums[0]
  // const b = nums[1]
  
  const [a, b, ...other] = nums
  console.log(a, b, other)