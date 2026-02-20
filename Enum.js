"use strict";
// enum whoType {
//     Iron_Man = "Iron Man",
//     Captain = 'Captain America',
//     Thor = 'Thor',
//     Hulk = 'Hulk',
// };
Object.defineProperty(exports, "__esModule", { value: true });
// let a: whoType = whoType.Iron_Man;
// a = whoType.Thor;
// console.log(a);
// without value:
var whoType;
(function (whoType) {
    whoType[whoType["Iron_Man"] = 0] = "Iron_Man";
    whoType[whoType["Captain"] = 1] = "Captain";
    whoType[whoType["Thor"] = 2] = "Thor";
    whoType[whoType["Hulk"] = 3] = "Hulk"; // 3
})(whoType || (whoType = {}));
;
const n = whoType.Captain;
console.log(n);
