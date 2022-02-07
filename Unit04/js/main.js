function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //The maximum is inclusive and the minmum is inclusive
}

function getMonthName(month) {
  let name;
  switch (month) {
    case 1:
      name = "January";
      break;
    case 2:
      name = "February";
      break;
    case 3:
      name = "March";
      break;
    case 4:
      name = "April";
      break;
    case 5:
      name = "May";
      break;
    case 6:
      name = "June";
      break;
    case 7:
      name = "July";
      break;
    case 8:
      name = "August";
      break;
    case 9:
      name = "September";
      break;
    case 10:
      name = "October";
      break;
    case 11:
      name = "November";
      break;
    case 12:
      name = "December";
      break;
    default:
      name = "Not a month";
      break;
  }
  return name;
}

function getFortune(fate) {
  let message;
  switch (fate) {
    case 1:
      message = "run into your crush at the mall";
      break;
    case 2:
      message = "be getting a pimple on your forehead";
      break;
    case 3:
      message = "get an A in this class";
      break;
    case 4:
      message = "find something you've lost for a long time ago";
      break;
    case 5:
      message = "become famous on the Internet";
      break;
    default:
      message = "Some sort of error occured ";
      break;
  }
  return message;
}

let month = getRandomIntInclusive(1, 12);
let day = getRandomIntInclusive(1, 30);
let fate = getRandomIntInclusive(1, 5);
console.log(getFortune(fate));
console.log(month);
const monthName = getMonthName(month);
const fortune = getFortune(fate);
const fortuneRevealed = `On ${monthName} ${day}, you will ${fortune}`;

document.querySelector("#fortune").innerText = fortuneRevealed;
