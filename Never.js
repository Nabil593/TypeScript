"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function never() {
    while (true) {
        console.log('Go..');
    }
} // This function type is never, which means it will never returns anything, it will never end. It is used for function that always throws on error or functions that never return.
// function test(): never {
//     console.log('End')
// } // this will give an error because the function is ending without returning anything, it is not a never type function.
