//document.getElementById('company').innerHTML = "Macy Bed and Breakfast"; //Older way of grabbing elements
document.querySelector('#company').innerText = "Macy Bed and Breakfast";
document.querySelector('header > h2').innerText = "Best B&B this side of Provo!";
document.querySelector('main > h1').innerText = "Welcome to Macy's B&B";

let userName = prompt("What is your name?")

let message = `Hello ${userName}, welcome to the finest lodging in Utah!` //Newer method of concatinating
// let message = "Hello " + userName + ", welcome to the finest lodging in Utah" //Older method of concatinating
document.querySelector('#greeting').innerText = message;