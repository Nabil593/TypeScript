// enum whoType {
//     Iron_Man = "Iron Man",
//     Captain = 'Captain America',
//     Thor = 'Thor',
//     Hulk = 'Hulk',
// };

// let a: whoType = whoType.Iron_Man;
// a = whoType.Thor;
// console.log(a);




// without value:
enum whoType {
    Iron_Man, // 0
    Captain,  // 1
    Thor,     // 2
    Hulk      // 3
};

const n: whoType = whoType.Captain;
console.log(n); // output: 1