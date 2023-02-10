import http from 'utils/http';
export const paymentUser = async (paymentData: any, config: any) => {
  const data = await http
    .post('payment', paymentData, config)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
  return data;
};
