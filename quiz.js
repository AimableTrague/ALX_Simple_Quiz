function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    const feedbackElement = document.getElementById('feedback');

    // Compare user's answer with the correct answer
    if (userAnswer) {
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Optional: Add visual feedback
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Optional: Add visual feedback
        }
    } else {
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "orange"; // Optional: Add visual feedback
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
