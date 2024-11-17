var user = { name: "Rahul", age: 23 };
console.log("Rahul");
console.log(user.name);
var string = "Rahul";
var string1 = "Rahul";
console.log(string);
var num1 = 0.2;
var num2 = 0.1;
console.log(num1.toFixed());
console.log(addTwoNum(num1, num2));
//don't use any
var isAlive = true;
console.log(typeof isAlive);
isAlive = "Rahul";
console.log(typeof isAlive);
var character;
character = getCharacter();
console.log(character);
function getCharacter() {
    return "Iron Man";
}
function addTwoNum(num1, num2) {
    return num1 + num2;
}
function signUpUser(name, email, password) {
    console.log(name, email, password);
    // return "hello";
}
signUpUser("1", "2", "4");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    else {
        return "200";
    }
}
//another way to declare functions
var getHello = function (s) {
    return "+1";
};
console.log(getHello(""));
var marvel = ["IronMan", "Thor", "Peter Quill"];
marvel.map(function (hero) {
    console.log(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
// function handleError(errmsg: string): never {
//   throw new Error(errmsg);
// }
// // handleError("Stop");
