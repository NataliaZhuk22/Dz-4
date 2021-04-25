let sum = 0;
let average = 0;
let history = '';
let numberOfsalaries = 0;

while (true) {
    let salary = prompt(getInfo(sum, average, history) + '\nВведите ЗП');
    if (salary === null) {
        if (confirm('Вы хотите выйти?')) {
            break;
        }
    }
    if (isNaN(Number(salary))) {
        if (confirm('Вы допустили ошибку!!! Хотите выйти?')) {
            break;
        }
        continue;
    }
    numberOfsalaries++;
    salary = Number(salary);
    sum += salary;
    average = sum / numberOfsalaries;
    history += salary + 'руб. ';
}

alert(getInfo(sum, average, history));

function getInfo(sum, average, history) {
    return `Сумма: ${sum}; \nСредняя: ${average}; \nИстория: ${history}`;
}

