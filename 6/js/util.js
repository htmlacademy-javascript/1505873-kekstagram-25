// Модуль с вспомогательными функциями.

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

export {getRandomIntInclusive};
export {getRandomArrayObject};

