function add (a,b)
{
    let c = a + b;
    console.log(c);
}
add(5, 3)
add(10, 20);
function greetings (n)
{
    console.log(`Hello ${n}`)
}
greetings("Prasad")
function sub() {
    let a = 10, b = 40;
	let c = b - a
	console.log(c)
}
sub()

function add2(a, b=6) {
	let c = a + b //5+6 = 11
	console.log(c)
}
add2(5)
add2(5,3)

function mul (a, b)
{
    return a*b
}
let y = mul(5,3)
console.log(y)

//write a function that returns no,of characters in given string
function fun (x)
{
    return x.length;
}
let res = fun("prasad")
console.log(res) //6
console.log(fun)

// function expressions

let z = function ()
{
    console.log("hello world")
}
console.log(z);


let puppy = function (n)
{
    console.log(`woof,woof  ${n}`)
}
puppy("prasad")
console.log(puppy)
let sub2 = function (a,b)
{
 return b-a;
}
console.log(sub2(10, 20));
let sub3 = (a, b) => b - a;
console.log(sub3(10, 20))

//write a function that checks whether given number is even or odd 
//Eg: evenOdd(5)  ==>odd



















