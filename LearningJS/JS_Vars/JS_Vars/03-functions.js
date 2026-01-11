

// Write the function fancyLog(msg),
// it prints the message to the console, surrounded by stars

// fancyLog('Hello Javascript')

function fancyLog(msg) {
    console.log('********************')
    console.log('* ' + msg + ' *')
    console.log('********************')
}


// Write the function: personalizeMsg(greet, name, balance)
// that returns something like: ‘Hi Puki, your balance is 20!’


// var theMsg = personalizeMsg('Hello', 'Moshe', 10000)
// console.log('theMsg:', theMsg)

// theMsg = personalizeMsg('Hola', 'Puki', 100)
// console.log('theMsg:', theMsg)

function personalizeMsg(greet, name, balance) {
    var msg = greet + ' ' + name + ', your balance is ' + balance + '!'
    // console.log('msg:', msg)
    return msg
}


// console.log('msg:', msg)


console.log('Hi')
f1()
console.log('banana')

function f1() {
    console.log('f1 calling f2')
    f2()
    console.log('f2 is done')
}

function f2() {
    console.log('Hi from f2')
    f3()
}

function f3() {
    console.log('Hi from f3')
}

