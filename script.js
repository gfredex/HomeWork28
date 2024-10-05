const btn1 = document.querySelector('.task1>button');
const str1 = document.querySelector('.task1>p');
btn1.addEventListener('click', () => {
    str1.textContent = 'Привет, мир!';
});
