import react from 'react';

const Sum = (a,b) => {
    let add=a+b;
    return add;
}
const Sub = (a,b) => {
    let s=a-b;
    return s;
}

const Mul = (a,b) => {
    let m=a*b;
    return m;
}

const Div = (a,b) => {
    let d=a/b;
    return d;
}

export {Sum,Sub, Mul,Div};