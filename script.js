function mouseOver() {
  document.getElementById("myName").style.color = "rgb(65, 10, 110)";
}

function mouseOut() {
  document.getElementById("myName").style.color = "rgb(58, 36, 180)"
}
var d = new Date();
//var dateToday = d.substring(0, 20);
document.getElementById("demo").innerHTML = d;