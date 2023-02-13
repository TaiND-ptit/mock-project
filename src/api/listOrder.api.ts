import http from 'utils/http';
export const getListOrder = async (config: any) => {
  const data = await http.get('list-order', config);

  return data;
};
