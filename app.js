const { join } = require("path");

// Given strings are equal in characters return true othwise false.
function comp(str1, str2) {
	var x = str1.length;
	var y = str2.length;
    
    if(x==y)
    {
        console.log('true');
    }
    else
    {
        console.log('false');
    }
}
comp('bc','abcd')


//2. Check given string is empty or not.
function isEmpty(s) {
if(s==s.length){
    console.log('true')
 }
 else{
    console.log('false')
 }
}
isEmpty('ab')


//3.Given two strings Concat
function concatName(firstName, lastName) {
	var x = lastName +', '+ firstName;
	console.log(x)
}
concatName('jo','do')


// 4.Convert array to string
function convert(x){
    var y = x.join()
   console.log(y)
}
convert(['a','b','c'])


//5.convert string to array
function fun1(str1){
    var y = str1.split('')
    console.log(y)
    var z = y.reverse()
    console.log(z)
    var w = z.join('')
    console.log(w)
}
fun1('nikitha')


var hello = name =>{
    console.log(name)
}
hello("'Nikitha'")




//convert array to string
function fun2(arr){
    var y = arr.sort()
    console.log(y[0])
  var x = arr.join('');
  console.log(x)
  var z = x.split('')
  console.log(z)
}
fun2([4,5,3,4,6,7,8])