export const extend = (a, b) => Object.assign({}, a, b);
export const sortArrayByKeyValue = (arr, key, direction) => {
  switch (direction) {
  case `ascending`:
    return arr.sort((a, b) => {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    });
  case `descending`:
    return arr.sort((a, b) => {
      if (a[key] > b[key]) {
        return -1;
      }
      if (a[key] < b[key]) {
        return 1;
      }
      return 0;
    });
  default:
    return arr;
  }
};
