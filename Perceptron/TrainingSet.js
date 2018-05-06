class TrainingSet {
  constructor(size) {
    this.data = [];
    this.size = size;
    this.learningRate = INITIAL_LEARNING_RATE;
    this.index = 0;

    for (let i = 0; i < this.size; i++) {
      this.data.push(new Data);
    }
  }

  // Retrieves next training data
  nextData() {
    if (this.index >= this.size) this.index = 0;

    this.data[this.index].learningRate = this.learningRate;
    this.learningRate *= (1 - LEARNING_DECAY_RATIO);

    return this.data[this.index++];
  }
}
