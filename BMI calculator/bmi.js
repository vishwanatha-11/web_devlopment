const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = 'Please provide a valid height in cm.';
        //return;
    }

   else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Please provide a valid weight in kg.';
       // return;
    }else{

    const heightInMeters = height / 100; // Convert height to meters
    const bmi = weight / (heightInMeters * heightInMeters);

    results.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
    }
});
