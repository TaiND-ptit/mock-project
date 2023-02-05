import { AxiosResponse } from 'axios';
import { Products } from 'types/product.type';

import http from 'utils/http';
export const getProducts = (page: number | string) =>
    http.get('get-product', {
        params: {
            _page: page
        }
    })
