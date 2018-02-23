import { UPDATE_USER_INFO } from '../constants/constants';

const initialState = {
    user: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_INFO:
            const { name, imgUrl } = action.payload;
            return Object.assign({}, state, { user: { name, imgUrl } });
        default: return state;
    }
};
