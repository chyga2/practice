// let count = 0;
// while(count < 10){
//     console.log(count);
//     if (count == 4){
//         break
//     };
//     count++
// };

// let count = 10;
// do { 
//     console.log(count);
//     count--;
// } while(count > 7);

// for(let i = 0; i < 10; i += 2){
//     console.log(i);
// };

// let arr = [1, 2, 7, 10, 15, 44]

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i] * 2);
// };

// for(let item of arr){
//     console.log(item);
// };

let obj = {
    name: 'dima',
    age: 22,
    phone: '88005553535'
};

for(let key in obj){
    console.log(key);
    console.log(obj[key]);
};