document.addEventListener("DOMContentLoaded", function() {
    // Get references to HTML elements
    const PmtInput = document.getElementById("Pmt");
    const rInput = document.getElementById("r");
    const nInput = document.getElementById("n");
    const calculateBtn = document.getElementById("calculateBtn");
    const resultDiv = document.getElementById("result");
  
    // Add click event listener to the Calculate button
    calculateBtn.addEventListener("click", function() {
      // Get values from input fields
      const Pmt = parseFloat(PmtInput.value);
      const r = parseFloat(rInput.value) / 100 / 12; // Convert percentage to decimal and monthly rate
      const n = parseFloat(nInput.value);
  
      // Check if all inputs are valid numbers
      if (isNaN(Pmt) || isNaN(r) || isNaN(n)) {
        resultDiv.textContent = "Please enter valid numbers for all inputs.";
      } else {
        // Calculate present value of repayments
        const PV_repayments = Pmt * (1 - Math.pow(1 / (1 + r), n)) * (1 / r);
  
        // Display present value of repayments
        resultDiv.textContent = "Present Value of Repayments: $" + PV_repayments.toFixed(2);
      }
    });
  });
  