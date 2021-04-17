// var name = "arsh";

// console.log(name);


// var name1 = "Arsh";
// var name2 = "Shaikh";

// var name3 = name1+name2;

// console.log(name3);

// var x = 100;
// var y = 200;

// var z = x + y;
// console.log(z);


// Addition Example

// var x = 100;
// var y = 200;
// var z = x + y;

// // printing the values
// console.log('The addition of x & y is : ' +z);

// // Or

// console.log( x + y);


// // Average Example
// var m = 300
// var a = 50;
// var b = 50; 
// var c = 50;

// var d = ((a + b + c) /m)*100;

// console.log("The Average of three values : " +d)

// // CONDITINAL STATEMENTS

// var x = 50;

// if (x > 25){
//     console.log("true")

// }else{
//     console.log("False")
// }

// var j = 100;
// var k = 125;

// if (k < j) {
//     console.log("K is greater than J")
// }else{
//     console.log("J is Less than K")
// }

// var o = 100;
// var p = 200;


// var q = o < p ? true : false;
// console.log(q);

// Array Function 

var arr = new Array(5);


arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[4] = 50;


 var sum = arr.reduce(function(a, b) {return a +b }, 0);

for(var i = 0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log("total size of Array is :" +arr.length);
console.log(" Sum of all numbers is : "+ sum)

console.log("=========================================")

var arr1 = new Array(100, 200, 300, 400, 500, 600, 700, 800, 900, 1000);
var sum = arr1.reduce(function(a, b) {return a +b },0);

for(var i = 0; i<arr1.length; i++){
    console.log(arr1[i]);
}

console.log("total size of array: "+arr1.length);
console.log(" Sum of all numbers is : "+ sum)


var z = sumAll(arr1);

function sumAll(){
    var i ;
    var sum = 0;
    for (var i = 0; i<arr1.length; i++){
        sum += arr1[i]
    }
    return sum;

}

console.log(z);
