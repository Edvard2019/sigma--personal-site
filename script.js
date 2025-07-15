const C = document.querySelector("canvas"),
$ = C.getContext("2d"),
W = (C.width = window.innerWidth),
H = (C.height = window.innerHeight);

const str = "Σ_life_style 24GLO.com=en 24ГЛО.КОМ=ru 24吉艾勒哦.西艾马=japan 24ぎどお.こおも=china २४गलओ.कओम=hindi 24قلعكعم=arabic",
matrix = str.split("");

let font = 11,
col = W / font,
arr = [];
text = 'SIGMA LIFE STYLE';
  	links = [
                {name: 'VK', link: 'https://vk.com'},
     		{name: 'TG', link: 'https://t.me'},
                {name: 'INST', link: 'https://instagram.com'},
                {name: 'YouTube', link: 'https://youtube.com'},
                {name: 'Rutube', link: 'https://rutube.ru'}
        ];
textX = (W / 2)-100;
textY = H / 2;
currentCharIndex = 0;
isFullTextPrinted = false; // Логический признак, закончился ли вывод текста

for (let i = 0; i < col; i++) arr[i] = 1;

// Получаем ссылку на текстовое поле
const textInput = document.getElementById('textInput');

// Обновляем текст на холсте при каждом изменении в поле ввода
textInput.addEventListener('input', () => {
    text_input = textInput.value; // Получаем введённый текст
    currentCharIndex = 0; // Сбрасываем индекс вывода текста
    isFullTextPrinted = false; // Сбрасываем флаг окончания вывода
});

function draw() {
	$.fillStyle = "rgba(0,0,0,.05)";
	$.fillRect(0, 0, W, H);
	$.fillStyle = "#0f0";
	$.font = font + "px system-ui";
	for (let i = 0; i < arr.length; i++) {
		let txt = matrix[Math.floor(Math.random() * matrix.length)];
		$.fillText(txt, i * font, arr[i] * font);
		if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
		arr[i]++;
	}
        $.save(); // Сохраняем состояние холста
        //$.translate(textX, textY); // Центрируем вывод текста
        $.fillStyle = '#fff'; // Белый цвет текста
        $.font = 'bold 24px serif';
        $.textAlign = 'left';
        $.textBaseline = 'top';



     	if(isFullTextPrinted){
		$.fillText(text, textX, textY);
	}else{
       		$.fillText(text.substring(0, currentCharIndex), textX, textY);
        	if (currentCharIndex === text.length) { // Если весь текст выведен
                	isFullTextPrinted= true; 
			
	// Гиперссылки соцсетей
	$.font = 'normal 16px comic sans';
        links.forEach((link, index) => {
        	let yPosition = textY + ((index + 1) * 30); // Нижняя позиция для ссылок
                //$.fillText(link.name, textX, yPosition);
                // Создание гиперссылки вокруг текста
                const hyperLink = document.createElement('a');
                hyperLink.href = link.link;
                hyperLink.textContent = link.name;
                hyperLink.style.position = 'absolute';
                hyperLink.style.left = `${textX}px`;
                hyperLink.style.top = `${yPosition}px`;
                hyperLink.style.color = '#fff';
                hyperLink.style.cursor = 'pointer';
                hyperLink.style.textDecoration = 'none';
                document.body.appendChild(hyperLink);
        });
        }
	currentCharIndex++;
}
    // Добавляем мутный прямоугольник под текстом
    $.fillStyle = 'rgba(0, 0, 0, 0.5)'; // Полупрозрачный черный фон
    $.fillRect(textX-100, textY, $.measureText(text).width+200, 200); // Ширина и высота прямоугольника
                		$.restore(); // Восстанавливаем состояние холста
			}

			setInterval(draw, 123);
			window.addEventListener("resize", () => location.reload());
