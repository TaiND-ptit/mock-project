import http from 'utils/http';
export const getCategoryProduct = async (id: number | string) => {
  const data = await http.get(`category-product/${id}`);
  return data;
};
