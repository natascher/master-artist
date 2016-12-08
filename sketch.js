function setup() {
  createCanvas(300, 300, WEBGL)
}

const height = 50
const radius = 50

function drawCones(count, position, current) {
  position = position || {
    x: 0,
    y: 0
  }
  current = current || 1

  if (current > count) {
    return
  }

  cone(radius, height)

  push()

  translate(position.x + 2 * radius, position.y)
  drawCones(count, position, current + 1)

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

  translate(-4 * radius, 0)

  drawRotated(5)

  translate(0, 3 * radius)

  drawRotated(3, { x: 50, y: 2 * radius })
}
