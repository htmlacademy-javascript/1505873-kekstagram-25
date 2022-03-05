import {getRandomIntInclusive} from './util.js';
import {getRandomArrayObject} from './util.js';

let id = 1;

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

export {getNewObjects};
