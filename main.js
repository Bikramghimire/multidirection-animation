let toppos = 240;
let leftpos = 0;
let container = document.querySelector(".container");
let ball = document.querySelector(".box");
console.log(container.offsetHeight);
function calculate(op1, op2) {
  toppos = eval(toppos + op1 + 5);
  leftpos = eval(leftpos + op2 + 5);
  ball.style.top = toppos + "px";
  ball.style.left = leftpos + "px";
}
setInterval(animate, 50);
function animate() {
  if (toppos >= 240 && toppos < 480 && leftpos >= 0 && leftpos < 240) {
    calculate("+", "+");
  }
  if (toppos <= 480 && toppos > 240 && leftpos >= 240 && leftpos < 480) {
    calculate("-", "+");
  }
  if (toppos <= 240 && toppos > 0 && leftpos <= 480 && leftpos > 240) {
    calculate("-", "-");
  }
  if (toppos >= 0 && toppos < 240 && leftpos <= 240 && leftpos > 0) {
    calculate("+", "-");
  }
}
