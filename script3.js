// 3. Напиши функцию`checkAccess`, которая принимает возраст пользователя.Если возраст меньше 18, функция должна бросать ошибку с сообщением "Доступ запрещен".Используйте `try...catch` для обработки ошибок и выведи сообщение об ошибке в консоль.

function checkAccess(userAge) {
  try {
    if (userAge < 18) {
      throw new Error("Доступ запрещен!");
    }
    return "Доступ разрешен!"
  } catch (error) {
    return "Ошибка: " + error.message;
  }
}


console.log(checkAccess(25));
console.log(checkAccess(15));
