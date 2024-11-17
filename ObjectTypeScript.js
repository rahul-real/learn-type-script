"use strict";
// const User = {
//   name: "Rahul",
//   email: "rahul@gmail.com",
//   isActive: true,
// };
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    // user = {
    //   name: "Rahul",
    //   email: "rahul@gmail.com",
    //   isActive: true,
    // };
    console.log(user);
    return user;
}
console.log(createUser({ name: "", email: "", isActive: true }));
// function createUser(newUser: { name: string; isPaid: boolean }): {
//   name: string;
//   isPaid: boolean;
// } {
//   console.log(newUser.name);
//   return newUser;
// }
// let newUser = { name: "Rahul", isPaid: true };
// createUser(newUser);
