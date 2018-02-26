import { UPDATE_USER_INFO } from '../constants/constants';

export const updateUserInfo = (fullName, imgUrl) => {
    return {
        type: UPDATE_USER_INFO,
        payload: { name: fullName, imgUrl }
    };
};
