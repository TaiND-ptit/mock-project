import http from 'utils/http';
export const logoutUser = async (config: any) => {
  const data = await http
    .get('logout', config)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
  return data;
};