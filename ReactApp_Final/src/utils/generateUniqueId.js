
export const generateId = (company, category, productName) => {
  return `${company}-${category}-${productName}`.replace(/\s+/g, '-').toLowerCase();
};
