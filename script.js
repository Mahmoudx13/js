// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var counter = 0;
var minus10Btn = document.getElementById("minus10");
var minus1Btn = document.getElementById("minus1");
var plus1Btn = document.getElementById("plus1");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");
var displayE1 = document.getElementById("display");
var stringInEl = document.getElementById("strIn");
var storyEl = document.getElementById("strOut");
var roundBtn1 = document.getElementById("rand1");
var roundBtn2 = document.getElementById("rand2");
var roundBtn3 = document.getElementById("rand3");
var roundBtn4 = document.getElementById("rand4");
var minus50Btn = document.getElementById("minus50");

var picBtn = document.getElementById("pic-btn");
var picContainer = document.getElementById("pic-container");

//  Event Listener
minus50Btn.addEventListener("click", minus50fcn);
minus10Btn.addEventListener("click", minus10fcn);
minus1Btn.addEventListener("click", minus1fcn);
plus1Btn.addEventListener("click", plus1fcn);
plus10Btn.addEventListener("click", plus10fcn);
plus50Btn.addEventListener("click", plus50fcn);
stringInEl.addEventListener("change", updateStory);

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

// Event Function
function minus50fcn() {
  // Update the value of the counter(JS)
  counter = counter - 50;
  console.log(counter);

  // Use the counter to update the website (HTML)
  displayE1.innerHTML = counter;
}

function minus10fcn() {
  // Update counter
  counter -= 10; // same as counter = counter - 10

  // Update site
  displayE1.innerHTML = counter;
}

function minus1fcn() {
  // Update counter
  // counter = counter -1 or
  // counter -= 1 or
  counter--;

  // Update site
  displayE1.innerHTML = counter;
}

function plus1fcn() {
  // Update counter
  counter = counter + 1;

  // Update site
  displayE1.innerHTML = counter;
}

function plus10fcn() {
  // Update counter
  counter = counter + 10;

  // Update site
  displayE1.innerHTML = counter;
}

function plus50fcn() {
  // Update counter
  counter = counter + 50;

  // Update site
  displayE1.innerHTML = counter;
}

function updateStory() {
  // Save the user's word to a variable
  var word = stringInEl.value;

  // Update the story variable (JS)
  story += word + " ";
  console.log(story);

  // Clear the input field
  stringInEl.value = "";

  // Update the site to show the story
  storyEl.innerHTML = story;
}

roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);
roundBtn4.addEventListener("click", round4);

function round1() {
  // Create random dec 0 - 1
  let rand = Math.random();

  // Round to 3 dec places
  rand = rand.toFixed(3);
  console.log(rand);

  // Update site
  document.getElementById("rand1-out").innerHTML = rand;
}

function round2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  document.getElementById("rand2-out").innerHTML = rand;
}

function round3() {
  // -5 to 5
  // var rand = Math.random() * (5 - (-5)) + (-5)
  var rand = Math.random() * 10 - 5;
  rand = Math.round(rand);
  console.log(rand);

  document.getElementById("rand3-out").innerHTML = rand;
}

function round4() {
  // __ to __
}

// Random # from x to y:
// Math.random() * (y - x) + x

// E.g. If i want a random # from 1 to 3:
// var rand = Math.random() * (3 - 1) + 1
//  rand = Math.round(rand);

picBtn.addEventListener("click", addCandy);

function addCandy() {
  // Every click, add another candy to the container
  picContainer.innerHTML += "<img width='50px' src='img/candy.png'>";
}
var story = "once apon a time, ";
var minus50Btn = document.getElementById("minus50");

document.getElementById("reset").addEventListener("click", function () {
  location.reload();
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add an event listener to the button
document.getElementById("random-rgb").addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomColor();
});

function getRandomFontSize(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min + "px";
}

document.getElementById("random-size").addEventListener("click", function () {
  document.body.style.fontSize = getRandomFontSize(10, 50); // Random size between 10px and 50px
});
