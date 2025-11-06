const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // Remove line below and write your code here
  const stats = {};
  
  for (let i = 0; i < domains.length; i += 1) {
    const parts = domains[i].split('.').reverse();
    let currentDNS = '';
    
    for (let j = 0; j < parts.length; j += 1) {
      currentDNS += '.' + parts[j];
      
      if (stats[currentDNS]) {
        stats[currentDNS] += 1;
      } else {
        stats[currentDNS] = 1;
      }
    }
  }
  
  return stats;
}

module.exports = {
  getDNSStats
};
