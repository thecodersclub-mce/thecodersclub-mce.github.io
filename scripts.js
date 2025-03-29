// Toggle Menu Functionality
document.getElementById("menu-btn").addEventListener("click", () => {
    const menu = document.getElementById("toggle-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Leaderboard Example
let scores = []; // Add scores dynamically
function updateLeaderboard() {
    const leaderboardDiv = document.getElementById("leaderboard");
    leaderboardDiv.innerHTML = scores.map((score, index) => `<p>${index + 1}. ${score}</p>`).join("");
}

// Example of Adding reCAPTCHA - Replace 'YOUR_SITE_KEY' with your key
function onLoad() {
    grecaptcha.render('recaptcha-widget', {
        'sitekey' : 'YOUR_SITE_KEY'
    });
}
