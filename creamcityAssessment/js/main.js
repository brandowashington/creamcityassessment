//time and date stuff
function DisplayTime()
{
    const today = new Date();
    let timeString = today.toDateString() + "   " + today.toLocaleTimeString();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = timeString;
    var t = setTimeout(DisplayTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}


//image slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
//show and hide
function showHide(){
var vis = document.getElementById("trickyDiv");
    if (vis.style.display ==='none'){
        vis.style.display = 'block';    
    }else {
        vis.style.display = 'none';
    }
};
