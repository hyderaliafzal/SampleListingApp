import keys from './keys';

export const add = (id) => ({
  type: keys.ADD,
  payload: id
});

export const get = () => ({
  type: keys.GET
});