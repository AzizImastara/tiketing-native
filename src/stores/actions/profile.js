import axios from '../../utils/axios';

export const profile = data => {
  return {
    type: 'PROFILE',
    payload: axios.get(`/user/user/${data}`),
  };
};

export const editProfile = data => {
  return {
    type: 'EDIT_PROFILE',
    payload: axios.patch(`/user/updateProfile/${data}`),
  };
};
