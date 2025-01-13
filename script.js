// Устанавливаем синий фон страницы
document.body.style.backgroundColor = "blue";
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

// Запрашиваем имя у пользователя через prompt
let userName = prompt("Введите ваше имя:");

// Создаем элемент для отображения имени
let nameElement = document.createElement("div");
nameElement.textContent = userName;
nameElement.style.color = "yellow";
nameElement.style.fontSize = "128px";
nameElement.style.textAlign = "center";

// Добавляем элемент на страницу
document.body.appendChild(nameElement);
