class Perceptron {
  constructor() {
    this.bias = INITIAL_BIAS;
    this.weightX = randomValue();
    this.weightY = randomValue();
  }

  // Current predicted function
  f(x) {
    return -(this.weightX * x + this.bias) / this.weightY;
  }

  // Predicts whether data is above or below line
  predict(x, y) {
    const sum = this.weightX * x + this.weightY * y + this.bias;

    return (sum >= 0) ? 1 : -1;
  }

  // Adjusts weightage and bias based on data
  train(data) {
    const prediction = this.predict(data.x, data.y);
    const error = data.label - prediction;

    this.weightX += data.x * data.learningRate * error;
    this.weightY += data.y * data.learningRate * error;
    this.bias += data.learningRate * error;
  }
}
