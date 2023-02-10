import http from 'utils/http';
export const updateProfileUser = async (userData: any, config: any) => {
  const data = await http
    .patch('edit-profile-user', userData, config)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
  return data;
};
