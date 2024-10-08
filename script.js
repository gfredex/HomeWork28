const btn1 = document.querySelector('.task1>button');
const str1 = document.querySelector('.task1>p');
btn1.addEventListener('click', () => {
    str1.textContent = 'Привет, мир!';
});

const btn2 = document.getElementById('btn2');
const str2 = document.getElementById('paragraf2');
btn2.addEventListener('click', () => {
    str2.style.color = 'red';
    str2.style.border = '1px solid black';
    str2.style.padding = '10px';
    str2.style.margin = '0 0 0 50px';
});

const btn3 = document.getElementsByClassName('btn3');
const str3 = document.getElementsByClassName('paragraf3');
btn3[0].addEventListener('click', () => {
    str3[0].textContent = 'Моё содержимое изменилось при нажатии на кнопку!'
    str3[0].style.cssText = 'font-weight: 800; text-decoration: underline;';
});

const btn4 = document.querySelector('.btn4');
const str4 = document.querySelector('.paragraf4');
btn4.addEventListener('click', () => {
    str4.textContent = 'Новый текст потому что жмякнули по кнопке!';
    str4.style.cssText = 'background-color: black; color: yellow';
});

const btnList = document.querySelector('.btn-list');
const list = document.querySelectorAll('.item-list');
btnList.addEventListener('click', () => {
    for (let i = 0; i < list.length; i++) {
        list[i].classList.toggle('activ-list-item');
        list[i].textContent = `${i + 1}-й Элемент обновленного списка`
    }
});

const blockTask21 = document.querySelector('.wrap-task21');
const infoBlock = document.querySelector('.info-block');

blockTask21.addEventListener('click', (e) => {
    if (e.target.classList == 'item-block1') {
        infoBlock.textContent = `Ты нажал на блок ${e.target.textContent}`;
        blockTask21.style.cssText = 'background-color: green';
    } else if (e.target.classList == 'item-block2') {
        infoBlock.textContent = `Ты нажал на блок ${e.target.textContent}`;
        blockTask21.style.cssText = 'background-color: yellow';
    } else if (e.target.classList == 'item-block3') {
        infoBlock.textContent = `Ты нажал на блок ${e.target.textContent}`;
        blockTask21.style.cssText = 'background-color: goldenrod';
    } else {
        infoBlock.textContent = 'Не тот блок';
        blockTask21.style.cssText = 'background-color: d8d8d8';
    }
});

const btnChangeImg = document.querySelector('.btn-img');
const imgTask22 = document.getElementById('img-task22');
btnChangeImg.addEventListener('click', () => {
    imgTask22.setAttribute('src', './img/img02.jpeg');
    imgTask22.setAttribute('width', '90%')
});

const nameUs = document.querySelector('#name');
const surname = document.querySelector('#surname');
const btnSubmit = document.querySelector('.btn-submit');
const btnReset = document.querySelector('.btn-reset');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (nameUs.value !== '' && surname.value !== '') {
        let tempStr = `Пользователь ${nameUs.value.trim()} ${surname.value.trim()} заполнил форму и отправил!`
        alert(tempStr);
    } else {
        alert(`Что не заполнено`)
    }
    nameUs.value = '';
    surname.value = '';
});
btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    nameUs.value = '';
    surname.value = '';
});

const btnChangeTxt = document.querySelector('#change');
const texts = document.querySelectorAll('.text24');
btnChangeTxt.addEventListener('click', () => {
    for (let i = 0; i < texts.length; i++) {
        texts[i].textContent = texts[i].textContent.replace(/текст/g, 'параграф');
    }
});