import keys from './keys';

export const add = (id) => ({
  type: keys.ADD,
  payload: id
});