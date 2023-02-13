import http from 'utils/http';
export const getListOrder = async (config: any) => {
  const data = await http
    .get('list-order', config)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
  return data;
};