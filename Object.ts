// const userData: {name: string, age: number, isRight: boolean} = {
//     name: 'Nabil',
//     age: 30,
//     isRight: true,
// };
// userData.name = 'Shariea Reza Nabil';

// console.log(userData);


const userData: {[key: string]: string | number | undefined | boolean | object} = {
    name: 'Nabil',
    age: 30,
    isRight: true,
    address: {
        city: 'Dhaka',
        country: 'Bangladesh',
    }
};

userData.company = 'Elite Tony Stark';
userData.isMac = false;

console.log(userData)