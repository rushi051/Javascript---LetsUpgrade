function myFunction() 
{
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 function q3()
{
    let a = document.getElementById(4).value
    console.log(a)
    document.write(`Welcome ${a} </br></br>`)

    var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.write(h + ":" + m + ":" + s)
   //  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
