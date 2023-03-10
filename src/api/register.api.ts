import { AxiosResponse } from 'axios';
import { User } from './../types/user.type';

import http from 'utils/http';

// interface Authorisation {
//   token: string;
//   type: string;
// }

// interface SuccessResponse {
//   user: User;
//   authorisation: Authorisation;
// }

export const addUser = (userRegister: Omit<User, 'avatar'>) => http.post('register', userRegister);
