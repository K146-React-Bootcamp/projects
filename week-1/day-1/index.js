const bootcamp = "";
// var bootcamp = "react.js"
// let bootcamp = "react.js"
// bootcamp = "yeni değer"
// console.log(bootcamp);

// const val = true;
// const num = 1;
// const array = [];
// const obj = {};

// const array = [1, 2, 3, 4];
// const array = ["1", "2", "3", "4"];
// const array = ["1", 2, "3", 4];
// const array = [true, false, "3", 4];
// const students = [
// 	{ name: "ahmet", age: 17 },
// 	{ name: "mehmet", age: 17 },
// 	{ name: "ali", age: 17 },
// ];

// students.push({ name: "veli", age: 16 })
// var student ={ name: "veli", age: 16 }
// console.log(student);
const title = "React Bootcamp From Index.js";
const button = document.createElement("button");
button.innerText = "button";

const domTitle = document.querySelector("#title")
domTitle.appendChild(button);

button.addEventListener("click", () => {
  alert("tıklandı")
})
const counter = document.querySelector("#counterr");
let val = 2;

// if (counter) {
//   counter.innerText = "Test";
// }
// ----
if(val > 3){
  console.log("val 3 den büyük");
}
else if (val > 4){
  console.log("val 4 den büyük");
}
else if (val >= 5){
  console.log("val 5 den büyük veya 5'e eşit");
}

switch (val) {
  case 2:
    console.log("2 ekrana yazdırıldı")
    break;
case 3:
    console.log("3 ekrana yazdırıldı")
    break;
  case 4:
    console.log("4 ekrana yazdırıldı")
    break;
  default:
    console.log(`${val} ekrana yazdırıldı`)
    break;
}

while (val < 5) {
  console.log(val);
  val++;
}