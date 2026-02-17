const numArray: number[] = [1, 2, 3, 4, 5]; // Array type-01
const strArray: string[] = ['a', 'b', 'c', 'd', 'e'];

const array: (number | string)[] = [1, 2, 3, 4, 5, 'Nabil'];
console.log(array); 

const numberArray: Array<number> = [1, 2, 3, 4, 5]; // Arry type-02
const stringArray: Array<string> = ['a', 'b', 'c', 'd', 'e'];

const readArray: ReadonlyArray<string> = ['Nabil', 'Stark', 'Tony', 'Bruce'];
// readArray.push('Captain America'); //Error: Property 'push' does not exist on type 'readonly string[]. Just Read no action.