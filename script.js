// // console.log("Hello world from file")
// // alert("Helllo from alert")
// // var name = prompt("Enter your name")
// // console.log(name)
// // document.write("This is another method...Dont Use")

// function add(x,y)
// {
//     console.log(x+y);
// }

// // add(10,20)
// // add(20,90)

// function con(t)
// {
//     console.log(t + "KM is " + t*1000 + "M");
// console.log(`${t} KM is ${t*1000} M`);
// }

// // con(55)

// function sum(a,b)
// {
//     return a+b
// }

// function mul(x)
// {
//     return x*1000
// }
// // var add = sum(100,200)
// // mul(add)
// console.log(mul(sum(100,200)));
// // console.log();

// var add = () => {}

// var details = {
//     Name:"Aman",
//     Age:21,
//     Class:"6th",
//     print : function() {
//         console.log(this.Name);
//     }
// }

// // console.log(details.Name);
// // console.log(details.print());
// function sub()
// {
//    return 100-23
// }
// var a=sub()
// console.log(a);

// function mul()
// {
//     console.log(2*a);
// }
// mul(a)
// var per={
//     name:"rahul",
//     age:29,
//     number:987655
// }
// console.log(per["age"]);
// var a=10
// var b=1222
// // console.log(`${a} this is a nuber less then 11 ${b} this number is divided by 2`);

// var str = "aman,raj,rahul,ajay"
// var arr = str.split(",")
// // console.log(arr);
// var a="hello"
// var b="world"
// console.log(`${a} very bad ${b}`);
// let a=1999.0000
// b=parseFloat(a)
// // console.log(b);

// const arr = ['Ram',23,true,[1,2,3],{name:'amit',age:34,marks:[34,54,78,98,23]}]
// const arr1 = [45,23,99,102,2,76,34]
// console.log(arr[4].marks[2]);

// arr[1] = 99
// arr = [1,false,"Name"]
// arr.push("New item")
// delete arr[1]
// const newArr = arr.concat(arr1)
// const newArr = arr + arr1
// console.log(arr1.sort(
//     (a,b) => {return b-a}
//     ));

// var newArr = arr1.map((item) => {
//     return item*100;
// })

// console.log(newArr);

// var ar=[123,345,"rahul",{name:"ghajni",agr:46,ph:900990990},(a,b)=>{
//     return a+b
//     // console.log("I am in function");
// } ]
// ar.push("Hello world")
// ar.length
// console.log(ar);
// console.log(ar[4](1111,1111));
// var arra=["hello","world","i Am" ,"here","but","not","there"]
// arra.splice(6,10,"hey","hii")
// console.log(arra);
// function add(a,b)
// {
//     return a+b;
// }
// console.log(add(10000000000000,99));
// var a=arra.sort()
// console.log(a);
// arra.reverse();
// console.log(arra);
// var arr = [1, 2, 3, 4, 5, 5, 6, 6,"hello world" , 6];
// arr.forEach((el)=>{
//     console.log(el);
// });
// arr.forEach(function (el) {
//   console.log(el);
// });
// const arr = [1, 2, 3, 4, 5, 5, 6, 6, 6, 6];
// arr[3] = "hello world";
// const rr = [2, 3, 4, 5, 5, 5, 5, 5];
// console.log(arr);
// var d = new Date();
// var c = d.toDateString();
// console.log(c);
// var options = {
//   weekday: "long",
//   year: "numeric",
//   //   month: "long",
//   day: "numeric",
// };
// var today = new Date();

// console.log(today.toLocaleDateString("en-US")); // 9/17/2016
// console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
// console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016
// var dateFormat = require("dateformat");
// var now = new Date();
// dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

// var a = Math.ceil(10.3);
// console.log(a);

// 1
// 21
// 321
// 4321
// 54321
// var str = "";
// for (var i = 1; i <= 5; i++) {
//   for (var j = 5; j > 5 - i; j--) {
//     str += j + "";
//   }
//   str += "\n";
// }
// console.log(str);
// var a = 11;
// if (a % 2 == 0) {
//   console.log("number is even");
// } else {
//   console.log("Number is odd");
// }

// var a = Math.trunc(Math.random() * 6);
// console.log(a);
// for (let i = 0; i <= 25; i++) {
//   console.log(i);
// }
var str = "";
for (let i = 1; i < 5; i++) {
  for (let j = 1; j < 5; j++) {
    str += "*";
  }
  str += "\n";
}
// Raghavendra kumar
// console.log(str);

// var a = 10;
// console.log("Before Loop:", a);
// for (var i = 0; i <= 5; i++) {
//   let a = 100;
//   console.log("Inside Loop:", a);
// }

// console.log("After Loop:", a);
// console.log(Math.trunc(Math.random() * 
11));
