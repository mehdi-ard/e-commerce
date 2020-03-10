import crypto from './crypto';

const prefix = 'evs-';

const shouldParse = data =>
  data && data[0] && (data[0] === '{' || data[0] === '[');

export default {
  set: (key, value) => {
    if (typeof value === 'object') value = JSON.stringify(value);
    else value = String(value);
    const cryptoKey = crypto.encrypt(`${prefix}${key}`);
    const cryptoValue = crypto.encrypt(value);
    localStorage.setItem(cryptoKey, cryptoValue);
  },
  get: key => {
    const cryptoKey = crypto.encrypt(`${prefix}${key}`);
    let data = localStorage.getItem(cryptoKey);
    if (data) {
      data = crypto.decrypt(data);
      return shouldParse(data) ? JSON.parse(data) : data;
    } else {
      return null;
    }
  },
  remove: key => {
    const cryptoKey = crypto.encrypt(`${prefix}${key}`);
    localStorage.removeItem(cryptoKey);
  }
};
