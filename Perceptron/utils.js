// Target function
function f(x) {
  return 0.5 * x + 0.2;
}

// Generates reasonable random value for experiment
function randomValue() {
  return map(Math.random(), 0, 1, -1, 1);
}

// Generates x coordinate on canvas
function pixelX(x) {
  return map(x, -1, 1, 0, width);
}

// Generates y coordinate on canvas
function pixelY(y) {
  return map(y, -1, 1, height, 0);
}
