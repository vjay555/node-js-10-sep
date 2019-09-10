// Lodash Module
const _ = require('lodash');
const moment = require('moment');

// JavaScript
let colors = ['white','black','yellow','blue','purple'];
let result = '';
colors.forEach((color) => {
    result += `${color.toUpperCase()} `;
});
console.log(result);

// Lodash
colors = ['white','black','yellow','blue','purple'];
result = '';
_.forEach(colors, (color) => {
    result += `${color.toUpperCase()} `;
});
console.log(result);

// JavaScript Way
let array = [100,'test',200,'abc',true , 'john'];

let findElementsJS = (array) => {
    let stringCount = 0;
    let numberCount = 0;
    array.forEach((element) => {
        if(typeof element === 'string'){
            stringCount++;
        }
        if(typeof element === 'number'){
            numberCount++;
        }
    });
    return { stringCount , numberCount};
};
result  = findElementsJS(array);
console.log(result);

// Lodash Way
let findElementsLodash = (array) => {
    let stringCount = 0;
    let numberCount = 0;
    _.forEach(array , (element) => {
        _.isString(element) ? stringCount++ : stringCount;
        _.isNumber(element) ? numberCount++ : numberCount;
    });
    return { stringCount , numberCount};
};
result = findElementsLodash(array);
console.log(result);

// moment js
let val = moment().format('MMMM Do YYYY, h:mm:ss a');

val = moment().format('dddd');

val = moment().format("Do / MMM / YYYY");

val = moment("20111031", "YYYYMMDD").fromNow();

val = moment().startOf('day').fromNow();

val = moment().endOf('day').fromNow();

val = moment().startOf('hour').fromNow();

val = moment().subtract(10, 'days').calendar();

val = moment().add(3, 'days').calendar();

console.log(val);


// Local specific date
val = moment().locale('te').format('LL');
console.log(val);
