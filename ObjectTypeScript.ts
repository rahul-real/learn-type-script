type User = {
  readonly id: string;
  name: string;
  email: string;
  isActive: boolean;
  readonly cardNumbers: Array<number>;
};

function createUser(user: User): User {
  user.name = "";
  user.cardNumbers.push(6);
  return user;
}
console.log(
  createUser({
    id: "1",
    name: "Rahul",
    email: "rahul@gmail.com",
    isActive: true,
    cardNumbers: [1, 3],
  })
);

type cardNumber = {
  cardnumber: string;
};
type cardDate = {
  cardDate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};

// function createUser(newUser: { name: string; isPaid: boolean }): {
//   name: string;
//   isPaid: boolean;
// } {
//   console.log(newUser.name);
//   return newUser;
// }
// let newUser = { name: "Rahul", isPaid: true };
// createUser(newUser);
