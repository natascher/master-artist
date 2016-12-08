function setup() {
  createCanvas(300, 300, WEBGL)
}

const height = 50
const radius = 50

function drawCones(count, current) {
  current = current || 1

  if (current > count) {
    return
  }

  cone(radius, height)

  push()

  translate(2 * radius, 0)
  drawCones(count, current + 1)

  pop()
}

function drawRotated(count, position) {
  push()

  rotateX(radians(90))
  drawCones(count, position)

  pop()
}

function draw() {
  camera(0, 0, 300)
  background(250)

  const locY = (mouseY / height - 0.5) * (-8);
  const locX = (mouseX / width - 0.5) * 8;

  pointLight(250, 250, 250, locX, locY, 0)

  translate(0, -4 * radius)

  drawRotated(1)

  translate(-2 * radius, 2 * radius)

  drawRotated(3)

  translate(-2 * radius, 2 * radius)

  drawRotated(5)

  translate(2* radius, 2 * radius)

  drawRotated(3)

  translate(2 * radius, 2 * radius)

  drawRotated(1)
}
