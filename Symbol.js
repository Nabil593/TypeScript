"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = Symbol();
const b = Symbol();
// console.log(a == b);
const did = Symbol('id');
const obj = {
    [did]: 23,
    nameMe: 'Nabil',
};
for (let key in obj) {
    console.log(key);
}
// console.log(key);
