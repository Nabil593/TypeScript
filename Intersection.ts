type x = {name: string}
type y = {age: number}
type xy = x & y; // This is called Intersection Data type.


const a: x = {name: 'Nabil'};
const b: y = {age : 19};

const c: xy = {
    name: 'Nabil',
    age: 19,
};

console.log(c);
