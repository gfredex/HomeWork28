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
})