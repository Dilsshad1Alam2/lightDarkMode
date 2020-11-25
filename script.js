const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const textBox = document.querySelector('#text-box');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const toggleIcon = document.querySelector('#toggle-icon')

function darkMode(){
    nav.style.background = 'rgb(0 0 0 / 50%)';
    textBox.style.background = 'rgb(255 255 255 / 50% )';
    image1.src = 'img/undraw_proud_coder_dark.svg';
    image2.src = 'img/undraw_feeling_proud_dark.svg';
    image3.src = 'img/undraw_conceptual_idea_dark.svg';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    toggleIcon.children[0].textContent = ('Dark Mode')
}

function lightMode(){
    textBox.style.background = 'rgb(0 0 0 / 50%)';
    nav.style.background = 'rgb(255 255 255 / 50% )';
    image1.src = 'img/undraw_proud_coder_light.svg';
    image2.src = 'img/undraw_feeling_proud_light.svg';
    image3.src = 'img/undraw_conceptual_idea_light.svg';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    toggleIcon.children[0].textContent = ('Light Mode')
}



//dynamic mode change
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark')
        darkMode();
        localStorage.setItem('theme','dark')
    }else{
        document.documentElement.setAttribute('data-theme','light')
        lightMode();
        localStorage.setItem('theme','light')
    }
}

toggleSwitch.addEventListener('change',switchTheme);

const currentTheme = localStorage.getItem('theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme)
}

if(currentTheme ==='dark'){
    toggleSwitch.checked = true;
    darkMode();
}