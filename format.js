function formatByMask(mask, number) {
  if (number === '') {
    return '';
  }
  var s = '' + number,
    r = '';
  for (var im = 0, is = 0; im < mask.length && is < s.length; im++) {
    r += mask.charAt(im) === 'X' ? s.charAt(is++) : mask.charAt(im);
  }
  return r;
}

function extractDateByEnglishDate(str) {
  if (str === '') {
    return '';
  }

  return str
    .split('-')
    .reverse()
    .join('/');
}

function extractEnglishDateByPortugueseDate(str) {
  if (str === '') {
    return '';
  }

  return str
    .split('/')
    .reverse()
    .join('-');
}

function extractDateByFullDate(str) {
  if (str === '') {
    return '';
  }

  return str.slice(0, 10);
}

function fillLeftZeros(value, size) {
  var output = value.toString();
  var length = size - output.length + 1;
  if (size > 0 && length > 0 && length < size) {
    output = Array(length).join('0') + output;
  }
  return output;
}

module.exports = {
  formatByMask,
  extractDateByEnglishDate,
  extractEnglishDateByPortugueseDate,
  extractDateByFullDate,
  fillLeftZeros,
};
