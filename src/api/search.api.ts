import http from 'utils/http';
export const getSearchProducts = (searchText: string) => http.get(`search?name=${searchText}`);
