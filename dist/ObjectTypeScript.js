"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    user.name = "";
    user.cardNumbers.push(6);
    return user;
}
console.log(createUser({
    id: "1",
    name: "Rahul",
    email: "rahul@gmail.com",
    isActive: true,
    cardNumbers: [1, 3],
}));
// function createUser(newUser: { name: string; isPaid: boolean }): {
//   name: string;
//   isPaid: boolean;
// } {
//   console.log(newUser.name);
//   return newUser;
// }
// let newUser = { name: "Rahul", isPaid: true };
// createUser(newUser);
