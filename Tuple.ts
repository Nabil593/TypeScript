const data: [string, number, boolean, string] = ['Nabil', 19, true, 'Stark'];

data.push('Banner'); // nothing happed if i push anything into a array.
// console.log(data);
const data2: readonly[string, number, boolean, string] = ['Nabil', 19, true, 'Stark']; // this is readonly array so, we can't push or any activity that can change the array. this is only for read. 
