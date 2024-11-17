"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
const rv = new TakePhoto("camera", "");
console.log(rv);
// class Insta extends TakePhoto {
// }
