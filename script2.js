// 2. Напиши функцию`transfromJSON`, которая принимает строку в формате JSON и возвращает объект.Используй `try...catch` для обработки возможных ошибок при парсинге JSON и выведи сообщение об ошибке в консоль;
const jsonString = '{"name":"Alex","age:32" }';

function transfromJSON() {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return "Ошибка:" + error;
  }
};

console.log(transfromJSON());