import { PredictionEngine } from './predictionEngine.js';

const predictionEngine = new PredictionEngine();
const dataPoints = [];

// DOM Elements
const dataInput = document.getElementById('dataPoint');
const addDataBtn = document.getElementById('addData');
const predictBtn = document.getElementById('predict');
const dataDisplay = document.getElementById('dataDisplay');
const predictionDisplay = document.getElementById('predictionDisplay');

// Add data point
addDataBtn.addEventListener('click', () => {
  const value = parseFloat(dataInput.value);
  if (!isNaN(value)) {
    dataPoints.push(value);
    updateDataDisplay();
    dataInput.value = '';
  }
});

// Make prediction
predictBtn.addEventListener('click', () => {
  if (dataPoints.length < 2) {
    predictionDisplay.textContent = 'Need at least 2 data points for prediction';
    return;
  }
  
  const prediction = predictionEngine.predict(dataPoints);
  predictionDisplay.textContent = `Next predicted value: ${prediction.toFixed(2)}`;
});

// Update data display
function updateDataDisplay() {
  dataDisplay.textContent = dataPoints.join(', ');
}