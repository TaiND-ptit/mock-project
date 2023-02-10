
import http from 'utils/http';
export const getCategoryProduct = (id: number | string) =>
    http.get(`category-product/${id}`)