let Multiply: (num1: number, num2: number) => number

Multiply = (x:number, y:number) => x * y;

function doubleit(num1: number): number {
    return num1 * 2;
}
let doubleitResult = doubleit(25)
console.log(doubleitResult);

console.log(Multiply(25,6));
