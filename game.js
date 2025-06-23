const penguin = document.getElementById("penguin");
const obstacle = document.getElementById("obstacle");

let isJumping = false;

function jump() {
  if (isJumping) return;
  isJumping = true;
  let position = 0;

  const upInterval = setInterval(() => {
    if (position >= 100) {
      clearInterval(upInterval);
      const downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 5;
          penguin.style.bottom = position + "px";
        }
      }, 20);
    } else {
      position += 5;
      penguin.style.bottom = position + "px";
    }
  }, 20);
}

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") jump();
});

document.addEventListener("click", jump);

setInterval(() => {
  const penguinBottom = parseInt(window.getComputedStyle(penguin).bottom);
  const obstacleLeft = obstacle.getBoundingClientRect().left;
  const penguinLeft = penguin.getBoundingClientRect().left;

  if (
    obstacleLeft < penguinLeft + 50 &&
    obstacleLeft > penguinLeft &&
    penguinBottom < 60
  ) {
    alert("ゲームオーバー！");
    location.reload();
  }
}, 10);
