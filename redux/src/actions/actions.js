
export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    };
};

export const changeUser = (name, age) => {
    return {
        type: 'CHANGE_USER',
        payload: { name, age }
    };
};
