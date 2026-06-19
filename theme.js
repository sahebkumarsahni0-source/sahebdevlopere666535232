// बटन और बॉडी को सेलेक्ट करना
const themeToggle = document.getElementById('theme-toggle');

// बटन पर क्लिक होने पर थीम बदलना
themeToggle.addEventListener('click', () => {
    // चेक करना कि अभी कौन सी थीम है
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // अगर डार्क है तो लाइट कर दो
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = 'Switch Theme (Dark)';
    } else {
        // अगर लाइट है तो डार्क कर दो
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Switch Theme (Light)';
    }
});