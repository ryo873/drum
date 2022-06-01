// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked");
// });

// function clickbtn() {
//   alert("I got Clicked");
// }
// document.getElementsByClassName("set").addEventListener("click", function () {
//   alert("I got clicked");
// });
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  // document.querySelectorAll("button")[i].addEventListener("click", function () {
    // // var audio = new Audio("sounds/tom-1.mp3");
    // // audio.play();
    // // this.style.color = "white";
    // // console.log(this.innerHTML);

    // var buttonHtml = this.innerHTML;
    // drum(buttonHtml);

    // buttonAnimation(buttonHtml);
  // });
// }

// document.querySelectorAll("button")[1].addEventListener("click", function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[2].addEventListener("click", function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[3].addEventListener("click", function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[4].addEventListener("click", function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[5].addEventListener("click", function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[6].addEventListener("click", function () {
//   alert("I got clicked");
// });

// window.addEventListener("keydown", function (event) {
  // // console.log(event.key);
  // var event1 = event.key;
  // drum(event1);

  // buttonAnimation(event1);
// });

// function drum(key) {
  // switch (key) {
    // case "w":
      // var w = new Audio("sounds/tom-1.mp3");
      // w.play();
      // break;
    // case "a":
      // var a = new Audio("sounds/tom-2.mp3");
      // a.play();
      // break;
    // case "s":
      // var s = new Audio("sounds/tom-3.mp3");
      // s.play();
      // break;
    // case "d":
      // var d = new Audio("sounds/tom-4.mp3");
      // d.play();
      // break;
    // case "j":
      // var j = new Audio("sounds/snare.mp3");
      // j.play();
      // break;
    // case "k":
      // var k = new Audio("sounds/crash.mp3");
      // k.play();
      // break;
    // case "l":
      // var l = new Audio("sounds/kick-bass.mp3");
      // l.play();
      // break;

    // default:
      // console.log("Error");
      // break;
  // }
// }

// function buttonAnimation(currentKey) {
  // document.querySelector("." + currentKey).classList.add("pressed");

  // setTimeout(removeClass, 100);

  // function removeClass() {
    // document.querySelector("." + currentKey).classList.remove("pressed");
  // }
// }

for(var a=0;a<document.querySelectorAll(".drum").length;a++)document.querySelectorAll("button")[a].addEventListener("click",function(){var a=this.innerHTML;b(a),c(a)});function b(a){switch(a){case"w":new Audio("sounds/tom-1.mp3").play();break;case"a":new Audio("sounds/tom-2.mp3").play();break;case"s":new Audio("sounds/tom-3.mp3").play();break;case"d":new Audio("sounds/tom-4.mp3").play();break;case"j":new Audio("sounds/snare.mp3").play();break;case"k":new Audio("sounds/crash.mp3").play();break;case"l":new Audio("sounds/kick-bass.mp3").play();break;default:console.log("Error")}}function c(a){document.querySelector("."+a).classList.add("pressed"),setTimeout(function(){document.querySelector("."+a).classList.remove("pressed")},100)}window.addEventListener("keydown",function(d){var a=d.key;b(a),c(a)})
