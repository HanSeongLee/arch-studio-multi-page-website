export const MONTH_NAMES = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];

export const convertDateToMonthNameYear = (date: Date) => {
    const monthName = MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    return `${monthName} ${year}`;
};
