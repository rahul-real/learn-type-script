let score: number | string = 3;
score = "R";
console.log(score);

type User = {
  name: string;
  id: number;
};
type Admin = {
  userName: string;
  id: number;
};
let rahul: User | Admin = { userName: "rahul", id: 23 };
console.log(rahul);
function getDbId(id: number | string) {
  if (typeof id == "string") {
    id.toLowerCase();
  } else {
    id.toFixed();
  }
  console.log(id);
}
getDbId(3.5);
getDbId("Rahul");
const data: number[] = [1, 2, 4];
data.forEach((num) => {
  console.log(num + 1);
});
const data2 = ["1", 2, true];

export {};
