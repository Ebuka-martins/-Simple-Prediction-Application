import { PredictionEngine } from './predictionEngine.js';

const predictionEngine = new PredictionEngine();
const dataPoints = [];

// DOM Elements
const dataInput = document.getElementById('dataPoint');
const addDataBtn = document.getElementById('addData');
const predictBtn = document.getElementById('predict');
const dataDisplay = document.getElementById('dataDisplay');
const predictionDisplay = document.getElementById('predictionDisplay');

// Helper function to handle both click and touch events
function addEventListeners(element, handler) {
    element.addEventListener('click', handler);
    element.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent double-firing on mobile devices
        handler(e);
    });
}

// Add data point handler
const addDataHandler = () => {
    const value = parseFloat(dataInput.value);
    if (!isNaN(value)) {
        dataPoints.push(value);
        updateDataDisplay();
        dataInput.value = '';
    }
};

// Prediction handler
const predictHandler = () => {
    if (dataPoints.length < 2) {
        predictionDisplay.textContent = 'Need at least 2 data points for prediction';
        return;
    }
    
    const prediction = predictionEngine.predict(dataPoints);
    predictionDisplay.textContent = `Next predicted value: ${prediction.toFixed(2)}`;
};

// Add event listeners for both click and touch
addEventListeners(addDataBtn, addDataHandler);
addEventListeners(predictBtn, predictHandler);

// Update data display
function updateDataDisplay() {
    dataDisplay.textContent = dataPoints.join(', ');
}

// Add input event for mobile keyboard "done" button
dataInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        addDataHandler();
    }
});