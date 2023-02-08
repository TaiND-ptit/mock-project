import { AxiosResponse } from 'axios';
import { Products } from 'types/product.type';

import http from 'utils/http';
export const getListProducts = (page: number | string) =>
    http.get(`get-product?page=${page}`)
