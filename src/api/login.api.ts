import { User } from './../types/user.type';

import http from 'utils/http';

export const loginUser = (userLogin: Omit<User, 'avatar' | 'name'>) => http.post('login', userLogin);
