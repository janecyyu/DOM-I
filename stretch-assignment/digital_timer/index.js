let time = 0;
var Counter = setInterval(timer, 10);

function timer() {
  if (time > 8000) {
    const redContent = document.querySelectorAll(".digit");
    redContent.forEach(item => (item.style.color = "red"));
  }

  if (time < 10000) {
    time = time + 10;
    document.getElementById("msTens").textContent = (time / 10) % 10;
    document.getElementById("msHundreds").textContent =
      Math.floor(time / 100) % 10;
    document.getElementById("secondOnes").textContent =
      Math.floor(time / 1000) % 10;
    document.getElementById("secondTens").textContent =
      Math.floor(time / 10000) % 10;
  } else if (time >= 10000) {
    clearInterval(Counter);
  }
}
