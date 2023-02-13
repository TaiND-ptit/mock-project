import http from 'utils/http';
export const getCategoryProduct = async (id: number | string) => {
    const data = await http
      .get(`category-product/${id}`)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
    return data;
  };
  
// export const getCategoryProduct = (id: number | string) => http.get(`category-product/${id}`);
