// assignment 5 Q-1

// var arr = [[1,2], [3,4], [5,6]]
// console.log (arr)

// ========================================================
// assignment 5 Q-2

// var arr = [[0, 1, 2, 3 ], [1, 0, 1, 2], [2, 1, 0, 1]]
// document.write (arr[0] + "</br>")
// document.write (arr[1] + "</br>")
// document.write (arr[2] + "</br>")

// ========================================================
// assignment 5 Q-3

// for(var i = 0; i <= 10; i++){
//         document.write(i + "<br/>")
// }

// ========================================================
// assignment 5 Q-4

// var inputNo = +prompt ("Enter Your Table Number")
// var inputLength = +prompt ("Enter Your Table Length")

// for (a = 1; a <= inputLength; a++) {
//     document.write(inputNo + "x" + a + "=" + (a*inputNo) + "<br/>")

// }

// ========================================================
// assignment 5 Q-5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (a = 0; a < fruits.length; a++){
//     document.write(fruits[a] + "</br>" + "</br>" )

// }

// for (a = 0; a < fruits.length; a++){
//     document.write("Element at index " + a + " is " + fruits[a] + "</br>" + "</br>" )

// }

// ========================================================
// assignment 5 Q-6

// document.write("COUNTING" + "</br>" )

// for (a = 1; a <= 15; a++){
//     document.write(a + ",")

// }
// document.write("</br>" + "</br>")

// document.write("REVERSE COUNTING" + "</br>" )

// for (a = 10; a > 0; a--){
//     document.write(a + ",")
// }

// document.write("</br>" + "</br>")

// document.write("EVEN NUMBER" + "</br>" )

// for (a = 0; a <= 20; a+=2){
//     document.write(a + ",")
//     console.log
// }

// document.write("</br>" + "</br>")

// document.write("ODD NUMBER" + "</br>" )

// for (a = 1; a <= 19; a+=2){
//     document.write(a + ",")
//     console.log
// }

// document.write("</br>" + "</br>")

// document.write("SERIES" + "</br>" )

// for (a = 2; a <= 20; a+=2){
//     document.write(a + "k, ")
//     console.log
// }

// ========================================================
// assignment 5 Q-7

// var bakItem = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to AAJ Bakery. What do you Want Sir/Mam");

// var flag = false;
// var index;


// for (a = 0; a < bakItem.length; a++) {
//   if (userInput == bakItem[a]) {
//     flag = true;
//     index = a;
//   }
// }
// if (flag) {
//   alert("Yes We Have " + userInput + " on are Bakery in index " + index);
// } else {
//   alert("Sory we dont have " + userInput + " in are Bakery");
// }



// ========================================================
// assignment 5 Q-8

// var arr = [15,5,23,99,35,47,1,27];
// var max = 0;

// for(var i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//        max = arr[i];        
// }
// }
// document.write ("<h1>" +"Array Numbers " + arr + "</br>" + "The Largest Number in Arry  Is " + max + "</h1>" + "</br>")


// // ========================================================
// // assignment 5 Q-9

// var arr = [15,5,23,99,35,47,1,27];
// var max = 100;

// for(var i = 0; i < arr.length; i++){
//     if(max > arr[i]){
//         max = arr[i];        
// }
// }
// document.write ("<h1>" +"Array Numbers " + arr + "</br>" + "The Smallest Number in Arry  Is " + max + "</h1>")



// ========================================================
// assignment 5 Q-10


// for (a = 5; a <= 100; a+=5){
//     document.write("<h2>" + a + "</h2>")
// }