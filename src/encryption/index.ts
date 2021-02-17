import crypto from 'crypto';
import { SECRET_KEY } from '../constant/constant';
import makeSalt from './makeSalt';

export const encrypt = (data, cryptType = 'sha256', secret = SECRET_KEY, encoding = 'hex') => (
  crypto.createHmac(cryptType, secret)
    .update(data)
    .digest("hex")
);

export const intToBase36 = (timestamp) => timestamp.toString(36);

export const base36ToInt = (timestamp) => parseInt(timestamp, 36);

export const b64Encode = (value) => Buffer.from((value).toString()).toString('base64');

export const b64Decode = (b64value) => Buffer.from(b64value, 'base64').toString();

export const makeSha512 = (password, salt) => {
  const hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
  hash.update(password);

  return hash.digest('hex');
};

export const createSaltHashPassword = (password) => {
  const salt = makeSalt(12);
  const hash = makeSha512(password, salt);

  return {
    salt,
    hash,
  };
};

export default {
  encrypt,
  intToBase36,
  base36ToInt,
  b64Encode,
  b64Decode,
};
