function fruite(): string {
    return 'Apple';
}
console.log(fruite());

function nothing() {
    // this function type is void, which means it does not return anything.
}

function anyType(): string | number | object {
    let a:string = 'Nabil';
    let b:number = 25;
    return a + b;
}

console.log(anyType());