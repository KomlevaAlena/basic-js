const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    // Remove line below and write your code here
    if (arguments.length < 2 || message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
  }

  return this._processText(String(message), String(key), 'encrypt');
  }

  decrypt(message, key) {
    // Remove line below and write your code here
    if (arguments.length < 2 || message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    
    return this._processText(String(message), String(key), 'decrypt');
  }

  _processText(text, key, mode) {
    const upperText = text.toUpperCase();
    const upperKey = key.toUpperCase().replace(/[^A-Z]/g, '');
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < upperText.length; i += 1) {
      const char = upperText[i];
      
      if (char >= 'A' && char <= 'Z') {
        const textCode = char.charCodeAt(0) - 65;
        const keyChar = upperKey[keyIndex % upperKey.length];
        const keyCode = keyChar.charCodeAt(0) - 65;
        
        let processedCode;
        if (mode === 'encrypt') {
          processedCode = (textCode + keyCode) % 26;
        } else {
          processedCode = (textCode - keyCode + 26) % 26;
        }
        
        result += String.fromCharCode(processedCode + 65);
        keyIndex += 1;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
