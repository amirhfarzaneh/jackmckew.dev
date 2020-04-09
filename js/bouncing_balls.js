var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var data = [];
var point_count = 50;
for (var i = 0; i < point_count; i++) {
  var obj = {
    radius: 10,
    angle: Math.random() * 360
  };
  obj.speed = 1;
  if (i == 0) {
    obj.colour = "red";
  } else {
    obj.colour = "blue";
  }
  obj.pos = [
    Math.random() * canvas.width - obj.radius,
    Math.random() * canvas.height - obj.radius
  ];
  data.push(obj);
}

function check_boundaries(height, width, ball) {
  if (ball.pos[0] >= canvas.width - ball.radius || ball.pos[0] <= ball.radius) {
    ball.angle = Math.PI - ball.angle;
  }
  if (
    ball.pos[1] >= canvas.height - ball.radius ||
    ball.pos[1] <= ball.radius
  ) {
    ball.angle = 2 * Math.PI - ball.angle;
  }
  return ball;
}

function check_collision(ball1, ball2) {
  var absx = Math.abs(parseFloat(ball2.pos[0]) - parseFloat(ball1.pos[0]));
  var absy = Math.abs(parseFloat(ball2.pos[1]) - parseFloat(ball1.pos[1]));

  // find distance between two balls.
  var distance = absx * absx + absy * absy;
  distance = Math.sqrt(distance);
  // check if distance is less than sum of two radius - if yes, collision
  if (distance < parseFloat(ball1.radius) + parseFloat(ball2.radius)) {
    return true;
  }
  return false;
}

function process_collision(ball1, ball2) {
  if (ball1.angle > 180) {
    ball1.angle -= 90;
  } else {
    ball1.angle += 90;
  }
  if (ball2.angle > 180) {
    ball2.angle += 90;
  } else {
    ball2.angle -= 90;
  }
  // while (check_collision(ball1, ball2)) {
  //   ball1.pos[0] += Math.cos(ball1.angle) * ball1.speed;
  //   ball1.pos[1] += Math.sin(ball1.angle) * ball1.speed;
  //   ball2.pos[0] += Math.cos(ball2.angle) * ball2.speed;
  //   ball2.pos[1] += Math.sin(ball2.angle) * ball2.speed;
  // }
}

function DrawMe() {
  ctx.clearRect(0, 0, 400, 400);

  for (var i = 0; i < data.length; i++) {
    var ball = data[i];

    for (var j = i + 1; j < data.length; ++j) {
      if (check_collision(data[i], data[j])) {
        process_collision(data[i], data[j]);
      }
    }
    ball = check_boundaries(canvas.height, canvas.width, ball);
    ball.pos[0] += Math.cos(ball.angle) * ball.speed;
    ball.pos[1] += Math.sin(ball.angle) * ball.speed;

    ctx.beginPath();
    ctx.fillStyle = ball.colour;
    ctx.arc(ball.pos[0], ball.pos[1], ball.radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  }
}
setInterval(DrawMe, 10);
