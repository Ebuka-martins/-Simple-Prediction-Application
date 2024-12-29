export class PredictionEngine {
  constructor() {
    this.learningRate = 0.01;
  }

  // Simple linear regression for prediction
  predict(data) {
    if (data.length < 2) return null;

    // Calculate the slope using the last few points
    const n = Math.min(5, data.length); // Use up to last 5 points
    const recentData = data.slice(-n);
    
    // Calculate average rate of change
    let sumChange = 0;
    for (let i = 1; i < recentData.length; i++) {
      sumChange += recentData[i] - recentData[i-1];
    }
    const avgChange = sumChange / (recentData.length - 1);

    // Predict next value based on the last value plus the average change
    const lastValue = data[data.length - 1];
    const prediction = lastValue + avgChange;

    return prediction;
  }
}