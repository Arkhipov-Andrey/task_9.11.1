
const firstNameOutput = document.querySelector('#firstNameOutput');
const surnameOutput = document.querySelector('#surnameOutput');
const genderOutput = document.querySelector('#genderOutput');
const birthYearOutput = document.querySelector('#birthYearOutput');
const patronymic = document.querySelector('#patronymic');
const profession = document.querySelector('#profession');

window.addEventListener('DOMContentLoaded', generate);
document.querySelector('#clear').addEventListener('click', clear);
document.querySelector('#generate').addEventListener('click', generate);

function clear() {
    firstNameOutput.innerText = '';
    surnameOutput.innerText = '';
    genderOutput.innerText = '';
    birthYearOutput.innerText = '';
    patronymic.innerText = '';
    profession.innerText = '';
};

function generate() {
    const initPerson = personGenerator.getPerson();
    firstNameOutput.innerText = initPerson.firstName;
    surnameOutput.innerText = initPerson.surname;
    genderOutput.innerText = initPerson.gender;
    birthYearOutput.innerText = initPerson.birthYear;
    patronymic.innerText = initPerson.patronymic;
    profession.innerText = initPerson.profession;
}