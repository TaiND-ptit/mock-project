import http from 'utils/http';
export const updateProfileUser = async (userData: any, config: any) => {
  const data = await http.patch('edit-profile-user', userData, config);

  return data;
};
