function submitForm() {
  // Get the form element
  var form = document.getElementById("assessmentForm");

  // Initialize score
  var score = 0;

  // Loop through each question
  for (var i = 1; i <= 10; i++) {
    // Get the selected answer for the current question
    var selectedAnswer = form.elements["q" + i].value;

    // Check if the selected answer is correct
    if (selectedAnswer === "correct") {
      score++;
    }
  }

  // Display the result
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Your score: " + score + " out of 10";
}
