export interface User {
  avatar: string;
  name: string;
  email: string;
  password: string;
}

export type UserLogin = Pick<User, 'email' | 'password'>;
