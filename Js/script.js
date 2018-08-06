Array.prototype.shuffle = function() {
  let i = this.length, j, temp;
  while( --i > 0 ){
    j = Math.floor( Math.random() * ( i + 1 ));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
  return this;
}

let arrayOf12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let randomNum = arrayOf12.shuffle();

$(document).ready(function() {

  let first = randomNum[0];

  const starImg = "img/star1.jpg";
  let roninImg1 = `./img/r${first}.jpg`;


  $("#box1").click(function(e) { 
    if ($(this).attr("src") == starImg ){
      $(this).attr("src", roninImg1);
    } else {
      $(this).attr("src", starImg);
    }
  });


  // let isStarImg = $(this).attr("src","../img/r1");

  //let clickedImg = document.querySelector()
  
  //document.getElementById("#box").addEventListener("click", displayDate);

    // $(this).mouseup(function () {
    //   $(this).attr("src",starImg);
    // });
  

});