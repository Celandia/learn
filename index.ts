import './index.scss';

//  es6语法 处理异步  async  await  promise


async function timeOut() {
    return 'hello world'
}
console.log(timeOut())

timeOut().then(result => {
    console.log(result)
})

console.log('我是后来居上')



function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000)
    })
}


async function testResult() {
    let result = await doubleAfter2seconds(10);
    console.log(result)
}

testResult();