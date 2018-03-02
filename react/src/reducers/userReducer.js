import { UPDATE_USER_INFO } from '../constants/constants';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USER_INFO:
            const { name, imgUrl } = action.payload;
            return Object.assign({}, state, { name, imgUrl });
        default: return state;
    }
};

export default userReducer;
