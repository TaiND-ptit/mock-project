import http from 'utils/http';
export const getProduct = (id: number | string) => http.get(`product/${id}`);
