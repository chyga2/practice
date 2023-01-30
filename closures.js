// function sayHelloTo(name){
//     const message = 'Hello ' + name
//     return function(){
//         console.log(message)
//     }
// };
// const helloDima = sayHelloTo('dima');
// const helloIgor = sayHelloTo('igor');
// helloIgor();
// helloDima();

function createFremeworkManager(){
    const fw = ['react', 'angular']
    return {
        print: function (){
            console.log(fw.join(' '))
        },
        add: function (framework) {
            fw.push(framework)
        }
    }
}
const manager = createFremeworkManager();
manager.print();
manager.add('vue');
manager.print();