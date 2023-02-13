import http from 'utils/http';
export const logoutUser = async (config: any) => {
  const data = await http.get('logout', config);

  return data;
};
