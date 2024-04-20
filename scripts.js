
function loadPreferences() {
    const savedLanguage = localStorage.getItem('language');
    const savedFontSize = localStorage.getItem('fontSize');
    
    if (savedLanguage) {
        document.getElementById('language').value = savedLanguage;
    }
    if (savedFontSize) {
        document.getElementById('fontSize').value = savedFontSize;
        document.body.style.fontSize = savedFontSize;
    }
  }
  
  
  document.getElementById('language').addEventListener('change', (event) => {
    const language = event.target.value;
    localStorage.setItem('language', language);
  });
  
  
  document.getElementById('fontSize').addEventListener('change', (event) => {
    const fontSize = event.target.value;
    localStorage.setItem('fontSize', fontSize);
    document.body.style.fontSize = fontSize;
  });
  
  
  function generateRandomScore() {
    return Math.floor(Math.random() * 100);
  }
  
  
  function updateGameScores() {
    const currentScore = generateRandomScore();
    const highScore = Math.max(currentScore, parseInt(localStorage.getItem('highScore') || 0));
    document.getElementById('currentScore').textContent = currentScore;
    document.getElementById('highScore').textContent = highScore;
    localStorage.setItem('highScore', highScore);
  }
  
  
  function loadGameScores() {
    document.getElementById('highScore').textContent = localStorage.getItem('highScore') || 0;
  }
  
  document.getElementById('playGame').addEventListener('click', updateGameScores);
  
  
  window.addEventListener('DOMContentLoaded', (event) => {
    loadPreferences();
    loadGameScores();
  });
  
  
  const setDarkMode = () => document.body.classList.add('dark-mode');
  const setLightMode = () => document.body.classList.remove('dark-mode');
  
  document.getElementById('darkMode').addEventListener('click', setDarkMode);
  document.getElementById('lightMode').addEventListener('click', setLightMode);
  
  
  const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");
  
  const executeCodes = () => {
  
  if (document.cookie.includes("LaSalle_Coding")) return;
  cookieBox.classList.add("show");
  
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
  
    
      if (button.id == "acceptBtn") {
        
        document.cookie = "cookieBy= LaSalle_Coding; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
  };
  
  
  window.addEventListener("load", executeCodes);
  
  
  function setCookie(name, value) {
    document.cookie = `${name}=${value};path=/`;
  }
  
  function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
  }
  
  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  }
  
  
  window.addEventListener('DOMContentLoaded', (event) => {
    const bgColorCookie = getCookie('bgColor');
    if (bgColorCookie) {
        bgColorCookie === 'dark' ? setDarkMode() : setLightMode();
    }
  });
  
  
  document.getElementById('customColor').addEventListener('input', (event) => {
    const color = event.target.value;
    document.body.style.backgroundColor = color; 
    localStorage.setItem('bgColor', color); 
  });
  
  
  window.addEventListener('DOMContentLoaded', (event) => {
    const storedColor = localStorage.getItem('bgColor');
    if (storedColor) {
        document.body.style.backgroundColor = storedColor; 
        document.getElementById('customColor').value = storedColor; 
    }
  });
  
  
  function clearCookies() {
    document.cookie.split(";").forEach(function(c) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  }
  
  
  function clearLocalStorage() {
    localStorage.clear();
  }
  
  
  function resetFormFields() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('language').selectedIndex = 0;
    document.getElementById('fontSize').selectedIndex = 1; 
    document.body.style.fontSize = ''; 
    
    document.body.style.backgroundColor = ''; 
    document.getElementById('customColor').value = '#ffffff'; 
    setLightMode(); 
  }
  
  
  function resetPreferences() {
    clearCookies();
    clearLocalStorage();
    resetFormFields();
  }
  
  
  document.getElementById('resetPreferences').addEventListener('click', resetPreferences);
  
  