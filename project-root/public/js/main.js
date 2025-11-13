document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('theme-toggle');
    const darkModeEnabled = localStorage.getItem('dark-mode') === 'true';

    document.body.classList.toggle('dark-mode', darkModeEnabled);
    toggleSwitch.checked = darkModeEnabled;

    toggleSwitch.addEventListener('change', () => {
        const isDark = toggleSwitch.checked;
        document.body.classList.toggle('dark-mode', isDark);

        if (isDark) {
            localStorage.setItem('dark-mode', 'true');
        } else {
            localStorage.removeItem('dark-mode');
        }
    });
});