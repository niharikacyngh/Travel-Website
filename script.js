const speakButton = document.getElementById('speakButton');
const textToSpeak = document.getElementById('textToSpeak');

// Check if the browser supports speech synthesis
if ('speechSynthesis' in window) {
  const synthesis = window.speechSynthesis;

  speakButton.addEventListener('click', () => {
    // Create a SpeechSynthesisUtterance instance
    const utterance = new SpeechSynthesisUtterance();

    // Set the text to speak
    utterance.text = textToSpeak.value;

    // Speak the text
    synthesis.speak(utterance);
  });
} else {
  speakButton.disabled = true;
  speakButton.textContent = 'Speech not supported';
}