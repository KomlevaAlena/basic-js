const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  // Remove line below and write your code here
  const mainStr = String(str);
  const additionStr = options.addition !== undefined ? String(options.addition) : '';
  
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  
  let additionPart = '';
  if (additionStr) {
    const additionArray = Array(additionRepeatTimes).fill(additionStr);
    additionPart = additionArray.join(additionSeparator);
  }
  
  const fullUnit = mainStr + additionPart;
  
  const resultArray = Array(repeatTimes).fill(fullUnit);
  return resultArray.join(separator);
}

module.exports = {
  repeater
};
