import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector('body');
const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
let timerId = null;

const rainbowBackground = function () {
  bodyRef.bgColor = colors[randomIntegerFromInterval(0, 5)];
  console.log('change color tp:', bodyRef.bgColor);
};

//console.dir(bodyRef);
//console.dir(timerId01);

startBtn.addEventListener('click', () => {
  timerId = setInterval(rainbowBackground, 1000);
  console.log('setInterval set!');
  startBtn.disabled = true;
});

// По клику на Стоп вызовем clearInterval и передадим
// аргументом ID того счетчика который надо остановить
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  console.log('setInterval stopped!');
  startBtn.disabled = false;
});

// Переключатель цветов
// Есть массив цветов в hex-формате и кнопки Start и Stop.
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
//  ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

// setTimeout(() => {
//   console.log('This text shows in 5000ms!');
// }, 5000);

// setInterval(() => {
//   console.log(`{Date.now()}`);
// }, 1000);
