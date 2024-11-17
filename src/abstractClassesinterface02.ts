interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: string;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: string
  ) {}
  getSepia(): void {}
}

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;
}
// const rv = new TakePhoto("camera", "");
// console.log(rv);

class Insta extends TakePhoto {
  getSepia(): void {}
  constructor(public cameraMode: string, public filter: string) {
    super(cameraMode, filter);
  }
}
const rv = new Insta("camera", "");
console.log(rv);
