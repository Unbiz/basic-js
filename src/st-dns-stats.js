import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  const domainsSplitted = domains.map((domain) => domain.split('.').reverse());
  const result = {};
  domainsSplitted.forEach((domain) => {
    let tempDomain = '';
    domain.forEach((item) => {
      tempDomain = `${tempDomain}.${item}`;
      result[tempDomain] = tempDomain in result ? result[tempDomain] + 1 : 1;
    });
  });
  return result;
}
