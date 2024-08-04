document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('audio');
    audioElement.autoplay = true;
    audioElement.load(); // Reload the audio element to apply the autoplay attribute
  });