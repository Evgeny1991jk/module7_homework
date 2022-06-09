//объявляем переменную, в которую записываем строку
const region = 'sverdlovskaya_oblast'
//создаем объект и записываем в него свойства
const city = {
  name: 'Yekaterinburg',
  population: 1650000,
  location: 'Russia'
}

//записываем функцию, перебирающую свойства объекта
function func(city, property) {
  return city.hasOwnProperty(property);
}
//выводим в консоль true или false в зависимости от нахождения аргумента строки в аргументе объекта
console.log(func(city, region));
