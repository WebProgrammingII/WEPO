
const getAllDaysInAMonth = (month, year) => {
    let initialDate = new Date(`${month}.1.${year}`);
    const daysInMonth = [];

    while (initialDate.getMonth() + 1 === month) {
        daysInMonth.push(new Date(initialDate));
        initialDate.setDate(initialDate.getDate() + 1);
    }

    return daysInMonth;
};

const days = getAllDaysInAMonth(12, 18);
days.forEach(d => console.log(d.toLocaleString('is-IS')));
