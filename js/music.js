const audioButton = document.querySelector('.audio-button');
const audioIcon = document.querySelector('.audio-icon img');
const audioPlayer = document.getElementById('audio-player');

// Automatically play audio when the page loads
window.addEventListener('DOMContentLoaded', () => {
    audioPlayer.play().catch((error) => {
        console.error('Autoplay was blocked:', error);
    });
});

// Set initial state
if (!audioPlayer.paused) {
    audioIcon.classList.remove('paused');
} else {
    audioIcon.classList.add('paused');
}

// Toggle audio play/pause
audioButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        audioIcon.classList.remove('paused');
    } else {
        audioPlayer.pause();
        audioIcon.classList.add('paused');
    }
});