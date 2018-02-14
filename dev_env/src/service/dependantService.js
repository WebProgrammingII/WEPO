/*
    entry.js should depend on this
**/

const dependantService = () => {
    return {
        console: (e) => console.log(e)
    };
};

export default dependantService();
