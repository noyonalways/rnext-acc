export const getNextId = (data) => {
  const maxId = data.reduce(
    (acc, curr) => (acc && acc.id > curr.id ? acc.id : curr.id),
    0,
  );
  return maxId + 1;
};
