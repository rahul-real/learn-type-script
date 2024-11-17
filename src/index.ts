class User {
  constructor(public email: string, public name: string) {}

  get getMail(): string {
    return `apple${this.email}`;
  }
}
// const a = document.getElementById("addOne");
// const b = document.querySelector(".value");
// let count = 0;
// const c = a.addEventListener("click", () => {
//   count = count + 1;
//   console.log(count);
//   b.innerHTML = `${count}`;
// });
const rahul = new User("r@.com", "");
console.log(rahul);
console.log(rahul.getMail);
