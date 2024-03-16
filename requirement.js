const proceedButton = document.getElementById('proceedBtn');

function openSignUpPage() {
    window.location.href = "application.html";
}
proceedButton.addEventListener('click', openSignUpPage);


const homeBtn = document.getElementById('home');
function goToHome() {
    window.location.href = "studentportal.html";
}
homeBtn.addEventListener('click', goToHome);