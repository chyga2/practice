function hello (){
    console.log('Hello', this)
}

const person = {
    name: 'Dima',
    age: 22,
    sayHello: hello,
    sayHelloWindow: hello.bing(this),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age: ${this.age}`)
        console.log(`Job: ${job}`)
        console.log(`Phone: ${phone}`)
        console.groupEnd
    }
} 

const lena = {
    name: 'Elena',
    age: 42
}

// person.logInfo.bind(lena, 'front', '8800553535')()
// person.logInfo.call(lena, 'front', '8800553535')
person.logInfo.apply(lena, ['front', '8800553535'])

