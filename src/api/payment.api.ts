import http from 'utils/http';
export const paymentUser = async (paymentData: any, config: any) => {
  const data = await http.post('payment', paymentData, config);

  return data;
};
