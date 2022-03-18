const checkCommentLength = 140;
const countComment = function (userComment) {
  if (userComment.length <= checkCommentLength) {
    return true;
  } else {
    Error('Максимальное количество символов комментария не более 140');
    return false;
  }
};
countComment('Комментарий посетителя сайта');

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

/* const isEscapeKey = (evt) => {
 return evt.key === 'Escape';
};

const isEnterKey = (evt) => {
  return evt.key === 'Enter';
}; */

export {getRandomArrayObject, getRandomIntInclusive};

