export const fetchSearchResults = (query, page) => {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        if (query !== "") {
          if (page % 2 === 0) {
            resolve(`Even-${query}-${page}`);
          } else {
            resolve(`Odd-${query}-${page}`);
          }
        } else {
          resolve();
        }
      },
      getRandomInteger(1000, 500),
    );
  });
};

export const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
