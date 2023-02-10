import http from 'utils/http';
export const paymentUser = (userPayment: any) => http.post('payment', userPayment);
