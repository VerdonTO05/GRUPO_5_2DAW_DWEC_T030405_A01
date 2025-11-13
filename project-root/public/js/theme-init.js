(function() {
  try {
    const darkModeEnabled = localStorage.getItem('dark-mode') === 'true';
    if (darkModeEnabled) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    }else{
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  } catch (e) {
  }
})();