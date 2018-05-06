// Initial setup
function setup() {
  perceptron = new Perceptron();
  trainingSet = new TrainingSet(SIZE);

  createCanvas(WIDTH, HEIGHT);
  noStroke();

  setInterval(trainPerceptron, SPEED);
}

// Draws sketch every frame
function draw() {
  // Background
  fill(128);
  rect(0, 0, width, height);

  for (let i = 0; i < trainingSet.data.length; i++) {
    const x = trainingSet.data[i].x;
    const y = trainingSet.data[i].y;
    const label = trainingSet.data[i].label;
    const prediction = perceptron.predict(x, y);

    // Point above or below function
    if (label === 1) fill(0);
    else fill(255);
    ellipse(pixelX(x), pixelY(y), 10, 10);

    // Correct vs incorrect prediction
    if (prediction === label) fill(0, 255, 0);
    else fill(255, 0, 0);
    ellipse(pixelX(x), pixelY(y), 5, 5);
  }

  strokeWeight(5);

  // Correct function graph
  stroke(0, 0, 255);
  line(0, pixelY(f(-1)), width, pixelY(f(1)));

  // Estimated function graph
  stroke(0, 128, 128);
  line(0, pixelY(perceptron.f(-1)), width, pixelY(perceptron.f(1)));

  noStroke();
}

function trainPerceptron() {
  perceptron.train(trainingSet.nextData());
}
