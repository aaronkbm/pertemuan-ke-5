number1 =10;
let number2=20;
const number3 = 30;
//const pi = 3.14

var number1= 40; //tidak disarankan
number2 = 50;
//number3 = 40;

//printf(number1)
//System.print.out(number1)
console.log(number1);
console.log(number2);
console.log(number3);

//tipe data

const number = 10;
console.log(typeof number);

let x;

console.log(typeof x);

const text= "hello world"

console.log(typeof text);

const isLogin = true;

console.log(typeof isLogin);

let someLaterData = null;

console.log(typeof someLaterData);

const arr = [1,"2",3,4,5];

console.log(arr[0]);

for (let i = 0;i < arr.length; i++) {
    console.log(arr[i]);
}


//arr[0]
//arr[1]
//arr[2]
//arr[3]
//arr[4]

// key: value
const user = {
    email: "admin@gmail.com",
    password : "12345",

};

console.log(user.email);
console.log(user.password);

const aString= "10" ;
const aNumber = 10;

console.log(aString == aNumber);
console.log(aString != aNumber);

console.log(number2 > number3);
console.log(number2 >= number3);
console.log(number2 < number3);
console.log(number2 <= number3);

console.log(aString === aNumber);
console.log(aString !== aNumber);

console.log(number2 > number3 && number2 >= number3); //true
console.log(number2 > number3 || number2 < number3); //true
console.log(!isLogin); //not is login -> false 

//perulangan
//parameter 1 -> mulai 0
//parameter 2 -> berakhir -> kurang dari 5
//parameter 3 -> increment (j++) -> setiap perulangan j ditambah 1
for (let j = 0; j < 5; j++) {
    console.log(j);
}

//parameter 1 -> mulai ->5
//parameter 2 -> mulai berakhir -> lebih dari 0
//parameter 3 -> decrement (j--) -> setiap perulangan j dikurangi 1
for (let j = 5; j >0; j--) {
    console.log(j);
}

const language =


















