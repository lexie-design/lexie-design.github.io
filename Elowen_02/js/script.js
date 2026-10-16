window.addEventListener('DOMContentLoaded', function () {
    // 1. Grab the UI form controls
    const albumSelect = document.getElementById('album-select');
    const songInput = document.getElementById('song-input');
    const colorPicker = document.getElementById('color-picker');
    const randomBtn = document.getElementById('random-btn');
  
    // 2. Grab the page elements we want to update
    const albumCard = document.getElementById('album-card');
    const albumTitle = document.getElementById('album-title');
    const albumLyric = document.getElementById('album-lyric');
    const songDisplay = document.getElementById('song-display');
  
    // EVENT 1: Dropdown menu changes the album theme color, title, and lyric
    albumSelect.addEventListener('change', function () {
      const album = albumSelect.value;
  
      if (album === 'debut') {
        document.body.style.backgroundColor = '#a8e6cf';
        albumCard.style.backgroundColor = '#f0fff8';
        albumTitle.textContent = 'Taylor Swift (Debut)';
        albumLyric.textContent = '"He said the way my blue eyes shined put those Georgia stars to shame."';
      } else if (album === 'fearless') {
        document.body.style.backgroundColor = '#f6e58d';
        albumCard.style.backgroundColor = '#fffdf0';
        albumTitle.textContent = 'Fearless (Taylor\'s Version)';
        albumLyric.textContent = '"It\'s a love story, baby, just say yes."';
      } else if (album === 'speaknow') {
        document.body.style.backgroundColor = '#d6a2e8';
        albumCard.style.backgroundColor = '#fbf2ff';
        albumTitle.textContent = 'Speak Now (Taylor\'s Version)';
        albumLyric.textContent = '"Long live all the magic we made."';
      } else if (album === 'red') {
        document.body.style.backgroundColor = '#eb4d4b';
        albumCard.style.backgroundColor = '#fff0f0';
        albumTitle.textContent = 'Red (Taylor\'s Version)';
        albumLyric.textContent = '"Loving him was red."';
      } else if (album === '1989') {
        document.body.style.backgroundColor = '#7ed6df';
        albumCard.style.backgroundColor = '#f0fcff';
        albumTitle.textContent = '1989 (Taylor\'s Version)';
        albumLyric.textContent = '"Cause darling, I\'m a nightmare dressed like a daydream."';
      } else if (album === 'reputation') {
        document.body.style.backgroundColor = '#535c68';
        albumCard.style.backgroundColor = '#dfe4ea';
        albumTitle.textContent = 'reputation';
        albumLyric.textContent = '"Are you ready for it?"';
      } else if (album === 'lover') {
        document.body.style.backgroundColor = '#ff9ff3';
        albumCard.style.backgroundColor = '#fff0fb';
        albumTitle.textContent = 'Lover';
        albumLyric.textContent = '"Can I go where you go?"';
      } else if (album === 'folklore') {
        document.body.style.backgroundColor = '#ced6e0';
        albumCard.style.backgroundColor = '#f1f2f6';
        albumTitle.textContent = 'folklore';
        albumLyric.textContent = '"Passed down like folk songs, the love lasts so long."';
      } else if (album === 'evermore') {
        document.body.style.backgroundColor = '#e58e26';
        albumCard.style.backgroundColor = '#fff6eb';
        albumTitle.textContent = 'evermore';
        albumLyric.textContent = '"Wherever you stray, I follow."';
      } else if (album === 'midnights') {
        document.body.style.backgroundColor = '#30336b';
        albumCard.style.backgroundColor = '#eef0ff';
        albumTitle.textContent = 'Midnights';
        albumLyric.textContent = '"Meet me at midnight."';
      } else if (album === 'ttpd') {
        document.body.style.backgroundColor = '#dcdde1';
        albumCard.style.backgroundColor = '#f5f6fa';
        albumTitle.textContent = 'The Tortured Poets Department';
        albumLyric.textContent = '"All\'s fair in love and poetry."';
      } else {
        document.body.style.backgroundColor = '#f4f1ea';
        albumCard.style.backgroundColor = '#ffffff';
        albumTitle.textContent = 'Taylor Swift Era Mixer';
        albumLyric.textContent = 'Pick an album or play with the colors below!';
      } else if (album === 'showgirl') {
      document.body.style.backgroundColor = '#f6d365';
      albumCard.style.backgroundColor = '#fffdf7';
      albumTitle.textContent = 'The Life of a Showgirl';
      albumLyric.textContent = '"Step into the spotlight and let the curtains rise."';
    });
  
    // EVENT 2: Typing in the text input updates the Favorite Track text live
    songInput.addEventListener('input', function () {
      if (songInput.value.trim() === '') {
        songDisplay.textContent = 'All Too Well';
      } else {
        songDisplay.textContent = songInput.value;
      }
    });
  
    // EVENT 3: Choosing a color in the color picker changes the page background
    colorPicker.addEventListener('input', function () {
      document.body.style.backgroundColor = colorPicker.value;
    });
  
    // EVENT 4: Clicking the button picks a random background and border color
    randomBtn.addEventListener('click', function () {
      const colors = ['#ffbe76', '#ff7979', '#badc58', '#7ed6df', '#e056fd', '#686de0', '#f9ca24', '#f0932b'];
      const randomBg = colors[Math.floor(Math.random() * colors.length)];
      const randomBorder = colors[Math.floor(Math.random() * colors.length)];
  
      document.body.style.backgroundColor = randomBg;
      albumCard.style.borderColor = randomBorder;
    });
  });