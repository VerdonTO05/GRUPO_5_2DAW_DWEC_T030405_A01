(function() {
  try {
    const darkModeEnabled = localStorage.getItem('dark-mode') === 'true';
    if (darkModeEnabled) {
      document.documentElement.classList.add('dark-mode');
    }else{
      document.documentElement.classList.remove('dark-mode');
    }
  } catch (e) {
  }
})();