(function() {
  try {
    const darkModeEnabled = localStorage.getItem('mode') === 'dark';
    const html = document.documentElement;
    html.classList.add(darkModeEnabled ? 'dark-mode' : 'light-mode');
  } catch (e) {}
})();