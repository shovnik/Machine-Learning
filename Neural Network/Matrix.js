class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.grid = [];
    for (let i = 0; i < rows; i++) {
      this.grid[i] = [];
      for (let j = 0; j < cols; j++) {
        this.grid[i][j] = randomValue();
      }
    }
  }

  multiply(matrix) {
    if (this.cols !== matrix.rows) throw new Error('Invalid matrix operation.');

    const result = new Matrix(this.rows, matrix.columns);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < matrix.cols; j++) {
        let sum = 0;
        for (let k = 0; k < this.cols; k++) {
          sum += this.grid[i][k] * matrix.grid[k][j];
        }
        result.grid[j][i] = sum;
      }
    }

    return result;
  }
}
