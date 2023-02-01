console.log('Request data..')

// setTimeout(() => {
//     console.log('Preparinde data..')
//     const backData = {
//         server: 'aws',
//         port: 5000,
//         status: 'working'
//     }
//     setTimeout(() => {
//         backData.modified = true
//         console.log('Data received', backData)
//     }, 2000)
// },2000)

// const p = new Promise((res, rej) => {
//     setTimeout(() => {
//     console.log('Preparinde data..')
//     const backData = {
//         server: 'aws',
//         port: 5000,
//         status: 'working'
//     }
//     res(backData)
//     },2000) 
// })

// p.then((data) => {
//     const p2 = new Promise((res, rej) => {
//         setTimeout(() => {
//             data.modified = true
//             res(data)
           
//         }, 2000)
//     })
//     p2.then(clientData => {
//         console.log('Data received', clientData)
//     })
// })

const p = new Promise((res, rej) => {
    setTimeout(() => {
    console.log('Preparinde data..')
    const backData = {
        server: 'aws',
        port: 5000,
        status: 'working'
    }
    res(backData)
    },2000) 
})

p.then((data) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            data.modified = true
            res(data)
           
        }, 2000)
    })
})
.catch(err => console.error('err', err))
.then((clientData) => {
        console.log('Data received', clientData)
        clientData.fromPromise = true
        return clientData
})
.then((data1) => {
    console.log('Modified data', data1)
}) 