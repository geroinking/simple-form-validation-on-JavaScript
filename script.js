"use strict";
let form = document.getElementById('form'),
    username = document.getElementById('username'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    password2 = document.getElementById('password2'),
    submit = document.querySelector('button'),
    userSmall = document.getElementById('userSmall'),
    passSmall = document.getElementById('passSmall'),
    emailSmall = document.getElementById('emailSmall'),
    passSmall1 = document.getElementById('passSmall1');


const showElem = element => {
    element.style.display = 'block';
};
const hideElem = element => {
    element.style.display = 'none';
};
const errorColor = (element, text) => {
    element.style.borderColor = 'red';
    text.style.display = 'inline';
    text.style.color = 'red';
};

const validated = (element, text) => {
    element.style.borderColor = 'green';
    text.style.display = 'none';
};

function checkEmail() {
    if (email.value.length <= 4) {
        errorColor(email, emailSmall);
        emailSmall.textContent = 'ВВЕДИ МЫЛО, ТУТ ЖЕ БЛЯТЬ НАПИСАНО!';
    } else if (!email.value.includes('@')) {
        errorColor(email, emailSmall);
    } else {
        validated(email, emailSmall);
    }
}

function checkUsername() {
    if (username.value.length < 6) {
        errorColor(username, userSmall);
        userSmall.textContent = 'ТЫ ДАЛБАЕБ, ВВЕДИ КАК МИНИМУМ 6 БУКАВ';
    } else {
        validated(username, userSmall);
    }
}

function checkPassword() {
    if (password.value !== password2.value) {
        errorColor(password, passSmall);
        passSmall.textContent = 'ПИШИ ОДИНАКОВЫЙ ПАРОЛЬ, ПИДРИЛА!';
        password2.style.borderColor = 'red';
    } else if (password.value <= 0) {
        errorColor(password, passSmall1);
        passSmall1.textContent = 'ДАУН, ВВЕДИ ХОТЬ ЧТО-ТО!';
        password2.style.borderColor = 'red';
    } else {
        hideElem(passSmall1, passSmall);
        password2.style.borderColor = 'green';
        password.style.borderColor = 'green';
    }
}

const formSubmit = event => {
    event.preventDefault();
    checkUsername();
    checkPassword();
    checkEmail();
};

window.addEventListener('submit', formSubmit);