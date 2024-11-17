interface User {
  readonly dbId: number;
  email: string;
  userid: number;
  googleId?: string;
  startTrail: () => string;
  startTrail2?(): string;
  getCoupon(coupon: string, value: number): number;
}

interface User {
  token: string;
}
interface Admin extends User {
  role: "admin" | "developer";
}
const rahul: Admin = {
  role: "admin",
  dbId: 1,
  email: "rv@.com",
  userid: 2121,
  startTrail: () => {
    return "";
  },
  token: "",
  getCoupon: (name: "CASHBACK20", value: 20) => {
    return value;
  },
};

console.log(rahul);

export {};
