const temperature = prompt("Введите температуру в градусах Цельсия");
alert(`Цельсий: ${temperature}, 
Фаренгейт: ${(Math.floor((9 / 5) * temperature + 32) * 10) / 10}`);