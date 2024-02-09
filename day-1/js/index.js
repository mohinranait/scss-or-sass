// first example
const counterApp = () => {
    let countNumber = 0;
    return () => {
        return countNumber += 1;
    }
}
const counter = counterApp();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3





// Second example
const parentFunction = (x) => (y) => `Hello ${x} ${y}`;
const appStore = parentFunction("Mr.");
console.log(appStore("Jhon"));  // Hello Mr. Jhon
console.log(appStore("Mohin")); // Hello Md. Mohin
console.log(appStore("Rana"));  // Hello Md. Rana