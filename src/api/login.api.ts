import { User } from './../types/user.type';

import http from 'utils/http';

export const loginUser = (userLogin: Omit<User, 'avatar' | 'name'>) => http.post('login', userLogin);
// export const loginUser = async (loginData: any) => {
//     const data = await http.post('login', loginData);
  
//     return data;
//   };