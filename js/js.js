// An attempt at adding "preload" function to help with performance
// with images.
var images = new Array();
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Array();
    images[i].src = preload.arguments[i];
  }
}
preload (
  "img/r1.jpg",
  "img/r2.jpg",
  "img/r3.jpg",
  "img/r4.jpg",
  "img/r5.jpg",
  "img/r6.jpg",
  "img/r7.jpg",
  "img/r8.jpg",
  "img/r9.jpg",
  "img/r10.jpg",
  "img/r11.jpg",
  "img/r12.jpg"
)
// End of preload

var imageTracker = "s";
function switchImg() {
  var image = document.getElementById('box1');
  if (imageTracker =="s") {
    image.src = "img/r1.jpg";
    imageTracker = "r";
  } else {
    image.src = "img/star1.jpg";
    imageTracker = "s";
  }
}
var imageTracker = "s";
function switchImg2() {
  var image = document.getElementById('box2');
  if (imageTracker =="s") {
    image.src = "img/r2.jpg";
    imageTracker = "r";
  } else {
    image.src = "img/star1.jpg";
    imageTracker = "s";
  }
}
var imageTracker = "s";
function switchImg3() {
  var image = document.getElementById('box3');
  if (imageTracker =="s") {
    image.src = "img/r3.jpg";
    imageTracker = "r";
  } else {
    image.src = "img/star1.jpg";
    imageTracker = "s";
  }
}
var imageTracker = "s";
function switchImg4() {
  var image = document.getElementById('box4');
  if (imageTracker =="s") {
    image.src = "img/r4.jpg";
    imageTracker = "r";
  } else {
    image.src = "img/star1.jpg";
    imageTracker = "s";
  }
}
var imageTracker = "s";
function switchImg5() {
  var image = document.getElementById('box5');
  if (imageTracker =="s") {
    image.src = "img/r5.jpg";
    imageTracker = "r";
  } else {
    image.src = "img/star1.jpg";
    imageTracker = "s";
  }
}
var imageTracker = "s";
function switchImg6() {
  var image = document.getElementById('box6');
  if (imageTracker =="s") {
    image.src = "img/r6.jpg";
    imageTracker = "r";
  } else {
    image.src = "img/star1.jpg";
    imageTracker = "s";
  }
}
var imageTracker = "s";
function switchImg7() {
  var image = document.getElementById('box7');
  if (imageTracker =="s") {
    image.src = "img/r7.jpg";
    imageTracker = "r";
  } else {
    image.src = "img/star1.jpg";
    imageTracker = "s";
  }
}
var imageTracker = "s";
function switchImg8() {
  var image = document.getElementById('box8');
  if (imageTracker =="s") {
    image.src = "img/r8.jpg";
    imageTracker = "r";
  } else {
    image.src = "img/star1.jpg";
    imageTracker = "s";
  }
}
var imageTracker = "s";
function switchImg9() {
  var image = document.getElementById('box9');
  if (imageTracker =="s") {
    image.src = "img/r9.jpg";
    imageTracker = "r";
  } else {
    image.src = "img/star1.jpg";
    imageTracker = "s";
  }
}
var imageTracker = "s";
function switchImg10() {
  var image = document.getElementById('box10');
  if (imageTracker =="s") {
    image.src = "img/r10.jpg";
    imageTracker = "r";
  } else {
    image.src = "img/star1.jpg";
    imageTracker = "s";
  }
}
var imageTracker = "s";
function switchImg11() {
  var image = document.getElementById('box11');
  if (imageTracker =="s") {
    image.src = "img/r11.jpg";
    imageTracker = "r";
  } else {
    image.src = "img/star1.jpg";
    imageTracker = "s";
  }
}
var imageTracker = "s";
function switchImg12() {
  var image = document.getElementById('box12');
  if (imageTracker =="s") {
    image.src = "img/r12.jpg";
    imageTracker = "r";
  } else {
    image.src = "img/star1.jpg";
    imageTracker = "s";
  }
}

//Attempt at assigning images to an array
//then randomize the order they appear at page reload.

// var images = [];
// var images[0].src = "img/r1.jpg";
// var images[1].src = "img/r2.jpg";
// var images[2].src = "img/r3.jpg";
// var images[3].src = "img/r4.jpg";
// var images[4].src = "img/r5.jpg";
// var images[5].src = "img/r6.jpg";
// var images[6].src = "img/r7.jpg";
// var images[7].src = "img/r8.jpg";
// var images[8].src = "img/r9.jpg";
// var images[9].src = "img/r10.jpg";
// var images[10].src = "img/r11.jpg";
// var images[11].src = "img/r12.jpg";
//
// var randomImage = images[Math.floor(images.length * Math.random())];
// function switchImg2() {
//   var image = document.getElementById('box1');
//   image.src = images[Math.floor(images.length * Math.random())];
//
// }
