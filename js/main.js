// Источник: http://kodesource.top/javascript/form/string-length.php
const maxLenght = 140;
const countComment = function (userComment) {
  if (userComment.length <= maxLenght) {
    return true;
  } else {
    Error('Максимальное количество символов комментария не более 140');
    return false;
  }
};
countComment('Комментарий посетителя сайта');

// 4.9 Больше деталей.
const description = ['Отель и море', 'Указатель к морю', 'Сейшеллы', 'Фотобикини',
  'Онсен-Кари', 'МакЛарен', 'Диета', 'Морс', 'Пляж и самолёт', 'Удобство хранения', 'Тропинка к пляжу',
  'RS5 на сликах', 'Высокая морская кухня', 'Суси из котэ', 'Домашние унты', 'Пролетая на Тибетом',
  'Бей, а мы споём', 'Красивая классика', 'Ночь, туалет, хайтэк', 'Восточный релакс отель', 'Дорого, мало, но модно',
  'Закат и чувства', 'Тропический краб', 'Файер шоу на битах', 'Джип-сафари'];
const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const names = ['Паша', 'Гагик', 'Эмили', 'Эльвира', 'Алёша', 'Виолетта'];

let id = 1;

// Источник: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// eslint-disable-next-line no-unused-vars
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || max === min || min === max || max < min || min > max) {
    Error('Вводите целые положительные числа от меньшего к большему');
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

const getRandomArrayObject = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const getCommentsArray = (commentsCount) =>
  Array.from({ length: commentsCount }, () => ({
    id: Date.now() + Math.random(),
    avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
    message: getRandomArrayObject(comments),
    name: getRandomArrayObject(names),
  }));

const getNewObjects = () => {
  const currentID = id++;
  return {
    id: currentID,
    url: `photos/${currentID}.jpg`,
    likes: getRandomIntInclusive(15, 200),
    comments: getCommentsArray(2),
    description: getRandomArrayObject(description),
  };
};

/* const newObjects = Array.from({ length: 25 }, getNewObjects);
window.console.log(newObjects); */


const getNewObjects1 = (numberObjectsCreate) => {
  const createKey = [];
  for (let i = 0; i <= numberObjectsCreate - 1; i++) {
    createKey[i] = {};
    createKey[i].id = i;
    createKey[i].url = `photos/${i}.jpg`;
    createKey[i].description = getRandomArrayObject(description);
    createKey[i].likes = getRandomIntInclusive(15, 200);
    createKey[i].comments = [getRandomArrayObject(comments), `img/avatar-${getRandomIntInclusive(1, 6)}.svg`, getRandomArrayObject(names)];
  }
  return createKey;
};
window.console.log(getNewObjects1(25));
