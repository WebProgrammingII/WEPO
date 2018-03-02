import { UPDATE_USER_INFO, CHANGE_LANGUAGE, GET_USER_SESSION } from '../constants/constants';
import fetch from 'isomorphic-fetch';

export const updateUserInfo = (fullName, imgUrl) => {
    return {
        type: UPDATE_USER_INFO,
        payload: { name: fullName, imgUrl }
    };
};

export const changeLanguage = (locale) => {
    return {
        type: CHANGE_LANGUAGE,
        payload: locale
    };
};

export const getUserSession = () => {
    return dispatch => {
        return fetch('https://serene-island-81305.herokuapp.com/user').then(data => dispatch(getUserSessionSuccess(data)));
    };
};

const getUserSessionSuccess = (data) => {
    return {
        type: GET_USER_SESSION,
        payload: data
    };
};
