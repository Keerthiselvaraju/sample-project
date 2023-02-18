//array literals///
let num=[1,2,3,4,5];
document.write(num);
//-----------------------------------
let strg=["kee","kam"];
document.write(strg.length);
/////instance of array/////
let type=[1,2,4,6];
type[5]="8";
document.write(type[3]);
///Array constructor (new)*
var obj=new Array(1,2,3,4,5);
for(var i of obj){
    document.write(i);
};
//------------------------------------
var arr1=["A","B"];
var arr2=["C","D"];
var arr3=["E","F"];
document.write(arr1.concat(arr2,arr3));
/////shift method/////
var arr1=["A","B"];
var arr2=["C","D"];
var arr3=["E","F"];
console.log(arr1.shift());
///////unshift method/////
var arr1 = ["A", "B"];
var arr2 = ["E", "D"];
var arr3 = ["E", "F"];
var temp = (arr2.unshift(arr1, arr3));
(arr1.unshift("kee"));
document.write(arr2);
////pop and push method////
var arr1=["kee","kam"];
var temp=arr1.pop();
document.write(temp);
(arr1.push("kabba"));
document.write(arr1);
/////sort////
var arr1=[7,4,2,8,1];
document.write(arr1.sort());
/////reverse////
var arr1=[7,4,2,8,1];
document.write(arr1.reverse());
/////join()////
var arr1=["aple","banaan","orange"];
var temp=arr1.join('*');
document.write(temp);
///every()
        //syntax ; array.every(callback)
var amount=[70,25,46,79,10];
function check(value){
    return value>=10;
}
document.write(amount.every(check));//is check all value
//some()---->it's seems to be same as every
var amount=[70,25,46,79,10];
function check(value){
    return value<100;
}
document.write(amount.some(check));
//is any one value on true it it will return true

////reduce()///
//syntax
//array.reduce(function(accumulator,currentvalue),0)

var arr = [6, 8, 5, 4];
var res = arr.reduce(function(a, b) {
    return a + b;
}, 0);
document.write(res);
//0'th position-->add addition values in function returns

////entries()////

var price = [70, 80, 30, 40];

var obj = price.entries();
    for (var i of obj) {
document.write(i);
};
///fill()(value,start,end(skip))*/
        var flower = ["Lotus", "Rose", "Lily"];
        var res = flower.fill("Sunflower", 0, 2);
        document.write(res+"<br>");

////splice///

//syntax
//splice(start,(it's start 0'th position)delete,element1,element2....);

        var month = ["Jan", "Feb", "april", "december"];
        var result = month.splice(1, 3, "march", "june");
        document.write(month);
//slice(start,end)

        var month = ["Jan", "Feb", "april", "december"];
        var result = month.slice(1, 3);
        document.write(result);
//indexOf,lastindexOf
        var month = ["Jan", "Feb", "april", "december"];
        var result = month.indexOf("april");
        document.write(result);
//---------------------------------------------
        var month = ["Jan", "Feb", "april", "december"];
        var result = month.lastIndexOf("feb");
        document.write(result);
//map()//
        var arr = [6, 7, 8, 9];
        var res = arr.map(x => x + 10);
        document.write(res);

//forEach(function(argument))

        var arr1 = [6, 7, 8, 9];
        arr1.forEach(function(value) {
            var ar = value * 2;
            document.write(ar + "@ ");
        });

 

   

   




   


