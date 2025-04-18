const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const logYearInfo = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = currentYear + 1;

    const monthsRemaining = 12 - now.getMonth();
    const isNewYear = now.getMonth() === 0 && now.getDate() === 1;

    console.log(isNewYear 
        ? 'Happy New Year!' 
        : `Next New Year is in ${monthsRemaining} months.`);
    
    console.log(`Current year: ${currentYear}, Is leap year: ${isLeapYear(currentYear)}`);
    console.log(`Next year: ${nextYear}, Is leap year: ${isLeapYear(nextYear)}`);
};

logYearInfo();
console.log("Update: Logging year info after changes.");

console.log("Update: Logging year info after changes.");

console.log("Update: Logging year info after changes.");

console.log("Update: Logging year info after changes.");

console.log("Update: Logging year info after changes.");

console.log("Update: Logging year info after changes.");
