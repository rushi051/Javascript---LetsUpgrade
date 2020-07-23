
  var c = ["blue", "black", "yellow", "red"];

  function changeColor() {
    setTimeout(function loop() {
      document.bgColor = c.shift();
      if (c.length) {
        setTimeout(loop, 3000);
      }
    }, 3000);
  }

  function start() {
    setInterval(changeColor(), 15000);
  }
