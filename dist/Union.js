"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let score = 3;
score = "R";
console.log(score);
let rahul = { userName: "rahul", id: 23 };
console.log(rahul);
function getDbId(id) {
    if (typeof id == "string") {
        id.toLowerCase();
    }
    else {
        id.toFixed();
    }
    console.log(id);
}
getDbId(3.5);
getDbId("Rahul");
const data = [1, 2, 4];
data.forEach((num) => {
    console.log(num + 1);
});
const data2 = ["1", 2, true];
