interface info {
    name: string,
    age: number,
    isStudent: boolean,
}; // this is a Interface.


interface teacherType extends info {
    subject: string,
} // this is a interface that extends another interface, it means that it will have all the propertices of the info interface and also it will have its own propertices.



const student: info = {
    name: "Stark",
    age: 30,
    isStudent: false,
};

const teacher: teacherType = {
    name: "Madum",
    age: 35,
    isStudent: false,
    subject: "Math",
};

const managment: info = {
    name: "Avengers",
    age: 88,
    isStudent: true,
};

console.log(teacher);