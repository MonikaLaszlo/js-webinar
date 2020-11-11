/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function area return the area of the circle
 * @function perimeter return the perimeter of the circle
 */

 class Circle {
     constructor(radius) {
         if (radius < 0){
             throw new Error('r cannot be negative');
         }
         this.r = radius;
     }
     getArea() {
         return Math.pow(this.r, 2) * Math.PI; 
     }
     getPerimeter() {
         return 2 * this.r * Math.PI;
     }
 }

 module.exports = Circle;