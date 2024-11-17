let user = { name: "Rahul", age: 23 };

console.log("Rahul");
console.log(user.name);

let string: string = "Rahul";
let string1: string = "Rahul";

console.log(string);

let num1: number = 0.2;
let num2: number = 0.1;
console.log(num1.toFixed());

console.log(addTwoNum(num1, num2));

//don't use any
let isAlive: any = true;
console.log(typeof isAlive);
isAlive = "Rahul";
console.log(typeof isAlive);

let character: string;

character = getCharacter();
console.log(character);
function getCharacter() {
  return "Iron Man";
}
function addTwoNum(num1: number, num2: number): number {
  return num1 + num2;
}

function signUpUser(name: String, email: string, password: string) {
  console.log(name, email, password);
  // return "hello";
}

signUpUser("1", "2", "4");

function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  } else {
    return "200";
  }
}
//another way to declare functions
const getHello = (s: string): string => {
  return "+1";
};

console.log(getHello(""));

const marvel = ["IronMan", "Thor", "Peter Quill"];

marvel.map((hero) => {
  console.log(hero);
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
consoleError("Error");
