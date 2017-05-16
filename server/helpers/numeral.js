const numeral = require('numeral');
const methods = {};

methods.convert = (value) => {
  let converted = numeral(value).format('0,0');
  return converted;
}

module.exports = methods;