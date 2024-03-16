const hamburgerMenu = document.getElementById('hamburgerMenuCont');
const closeHamburgerMenu = document.getElementById('hamburgerCloseDiv');
function hideHamburgerMenu() {
    hamburgerMenu.classList.add('hidden');
    closeHamburgerMenu.classList.add('hidden');
}
window.addEventListener('DOMContentLoaded', hideHamburgerMenu);




const hamburgerDiv = document.getElementById('hamburgerImgDiv');
function popUpHamburgerMenus() {
    hamburgerMenu.classList.add('display');
    hamburgerDiv.classList.add('hidden');
    closeHamburgerMenu.classList.add('display');

}
hamburgerDiv.addEventListener('click', popUpHamburgerMenus);




const applyBtn = document.getElementById('applyNowBtn');
function openAdmissionRequirement() {
    window.location.href = "requirement.html";
}
applyBtn.addEventListener('click', openAdmissionRequirement);




const loginButton = document.getElementById('loginBtn');
function openLoginPage() {
    window.location.href = "login.html";
}
loginButton.addEventListener('click', openLoginPage);



function closeHambMenu() {
    hamburgerMenu.classList.remove('display');
    closeHamburgerMenu.classList.remove('display');
    hamburgerDiv.classList.add('display');
}
closeHamburgerMenu.addEventListener('click', closeHambMenu);



const homeBtn = document.getElementById('home');
function goToHome() {
    window.location.href = "studentportal.html";
}
homeBtn.addEventListener('click', goToHome);


