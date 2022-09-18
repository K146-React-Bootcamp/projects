// fonksiyonlar nedir ?
// belli bir kod parçaçığını yeniden kullanılabilir 
// hale getirdiğimiz bir yazım stili yada kod parçacığıdır.

// nasıl tanımlanır?

// 1.
// parametre alan ve geriye değer döndüren method
function sum(a, b) {
 // bir şeyler yapılabilir
  return a + b;
}

// 2.
// const, var, let kullanarak 
// const function_name = function (a, b) {
// // bir şeyler yapılabilir
// }

// 3.
// arrow method
// const, var, let
// let function_name = (a, b) => {
//   // bir şeyler yapılabilir
// }
// kısa arrow function
// let function_name = (a, b) => undefined

// 4.
// geriye function dönen function tanımı
// function functionCreator(a, b) {
//   return function (c, d){
    
//   }
// }
// const createFn = functionCreator();
// createFn();

// 5.
// parametre alan function tanımlaması
// const function_name = function (param1, param2, param3) {
//   // bir şeyler yapılabilir.
//   console.log({ param1, param2, param3 })
// }
// 6. constructor method
// const Person = function (name, age, gender) {
//   const self = this;
//   self.name = name;
//   self.age = age;
//   const _gender = gender;

//   self.getGender = () => _gender ? "Erkek" : "Kadın";
//   this.toString = function () {
//     return self.name + " " + self.age + " " + self.getGender();
//   }
// }

// nasıl kullanılır?
// const total = sum(1, 3);
// console.log("total", total);
// const total2 = sum(1, 5);
// console.log("total2", total2);

// const student = new Person("ahmet", 16, 1);
// console.log(student.toString())

// ES6 Class yapısı
// class Person2 {
//   name = ""
//   age = 0
//   constructor(name, age) {
//     this.name = name;
//     this.age = age
//   }

//   toString() {
//     return this.name + " " + this.age;
//   }
//   toString2 = () => {
//     return this.name + " " + this.age
//   }
// }

// const human = new Person2("ali", 16);

// console.log(human.toString());

// Depolama ?
// 
// localStorage
// key ve value eklenir
window.localStorage.setItem("bootcamp", "react.js");

// belirtilen key varsa sile
// window.localStorage.removeItem("bootcamp2");
const storage = window.localStorage.getItem("bootcamp2");
console.log(storage)
// tümünü siler
// window.localStorage.clear();

// ödev
// sessionStorage
// cookie