//Создаем объект и задаем ему свойства
const city = {
    name: 'Yekaterinburg',
    population: 1650000,
    location: 'Russia'
  }
  
  //создаем прототип от изначального объекта city
  const anotherCity = Object.create(city);
  anotherCity.capital = false;
  
  //перебираем свойства прототипа и выводим в консоль: 
  //свойства, которые были унаследованы от изначального объекта
  //собственное свойство прототипа со значением этого свойства
  for (let key in anotherCity) {
    if (anotherCity.hasOwnProperty(key))
    console.log(key);
    console.log(anotherCity[key]);
  }