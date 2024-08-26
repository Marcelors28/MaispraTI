const prompt = require('prompt-sync')()


let a = 0;
let b = 1;

for (let i = 0; i < 10; i++) {
    console.log(a);
    const nextTerm = a + b;
    a = b;
    b = nextTerm;
}