// Define the API URL
const adviceSlipAPI = 'https://api.adviceslip.com/advice';
const adviceOutput = document.getElementById('adviceTextContainer');
const adviceId = document.getElementById('adviceIdContainer');

// Make a GET request
fetch(adviceSlipAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    adviceId.innerHTML = data.slip.id;
    adviceOutput.innerHTML = data.slip.advice;
  })
  .catch(error => {
    console.error('Error:', error);
  });