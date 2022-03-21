console.log('---#5');
console.log(2 + 2);
console.log(2 - 1);
console.log(3 * 4);
console.log(12 / 2);
console.log('---#6');
console.log(1, 2, 3, 4, 5);
console.log('6(just training)')
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log('---#7');
console.log(5, 4, 3, 2, 1);
console.log('---#8');
function getMarkInfo(condition) {
    if (condition === 10) {
        console.log('У Вас максимальный балл');
    } else {
        console.log('У Вас средний бал');
    }
}
getMarkInfo(10)
getMarkInfo(1)

console.log('---#9');
function getDayInfo(position) {
    switch (position) {
        case 0:
            console.log('Sunday');
            break;
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        default:
            console.log('Wrong data');
            break;
    }
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)
getDayInfo(7)