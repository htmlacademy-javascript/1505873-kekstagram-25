// Источник: http://kodesource.top/javascript/form/string-length.php
const COUNT_COMMENT = function (userComment, maxlength) {
  maxlength = 140;
  const LENGTH_COMMENT = userComment.length;
  if (LENGTH_COMMENT <= maxlength) {
    return true;
  } else {
    Error('Максимальное количество символов комментария не более 140');
    return false;
  }
};
COUNT_COMMENT('Комментарий посетителя сайта');

// Источник: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || max === min || min === max || max < min || min > max) {
    Error('Вводите целые положительные числа от меньшего к большему');
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
getRandomIntInclusive(20, 10);
