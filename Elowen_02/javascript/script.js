// 1. Grab the UI form elements
const eraSelect = document.getElementById('era-select');
const braceletInput = document.getElementById('bracelet-input');
const surpriseBtn = document.getElementById('surprise-btn');

// 2. Grab the page elements we want to change
const eraCard = document.getElementById('era-card');
const eraTitle = document.getElementById('era-title');
const eraLyric = document.getElementById('era-lyric');
const braceletDisplay = document.getElementById('bracelet-display');
const surpriseText = document.getElementById('surprise-text');

// EVENT 1: Change the background color, title, and lyric when a new Era is selected
eraSelect.addEventListener('change', function () {
  const chosenEra = eraSelect.value;

  if (chosenEra === 'lover') {
    document.body.style.backgroundColor = '#ffd1dc';
    eraTitle.textContent = 'Lover Era';
    eraLyric.textContent = '"Can I go where you go?"';
  } else if (chosenEra === 'folklore') {
    document.body.style.backgroundColor = '#d3d3d3';
    eraTitle.textContent = 'folklore Era';
    eraLyric.textContent = '"Passed down like folk songs, the love lasts so long."';
  } else if (chosenEra === 'reputation') {
    document.body.style.backgroundColor = '#2b2b2b';
    eraTitle.textContent = 'reputation Era';
    eraLyric.textContent = '"Are you ready for it?"';
  } else if (chosenEra === 'midnights') {
    document.body.style.backgroundColor = '#1c2951';
    eraTitle.textContent = 'Midnights Era';
    eraLyric.textContent = '"Meet me at midnight."';
  } else {
    document.body.style.backgroundColor = '#f4f1ea';
    eraTitle.textContent = 'The Eras Tour Customizer';
    eraLyric.textContent = '"It\'s been a long time coming..."';
  }
});

// EVENT 2: Update the friendship bracelet text live as the user types
braceletInput.addEventListener('input', function () {
  if (braceletInput.value === '') {
    braceletDisplay.textContent = 'SWIFTIE';
  } else {
    // Convert input to uppercase so it looks like letter beads
    braceletDisplay.textContent = braceletInput.value.toUpperCase();
  }
});

// EVENT 3: Reveal the acoustic surprise song and add a gold glow when the button is clicked
surpriseBtn.addEventListener('click', function () {
  eraCard.classList.toggle('encore-mode');

  if (eraCard.classList.contains('encore-mode')) {
    surpriseText.textContent = 'Surprise Song: "All Too Well (10 Minute Version)" on guitar!';
    surpriseText.style.backgroundColor = '#fff3cd';
    surpriseBtn.textContent = 'Hide Surprise Song';
  } else {
    surpriseText.textContent = 'Click the button below to reveal tonight\'s acoustic surprise song!';
    surpriseText.style.backgroundColor = '#f9f9f9';
    surpriseBtn.textContent = 'Reveal Surprise Song';
  }
});