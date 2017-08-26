// Напишите функцию zip, которая будет принимать на вход несколько 
// объектов (любое количество), и возвращать единственный объект, 
// содержащий все поля из всех объектов. Если одно и то же поле было 
// в нескольких объектах, необходимо оставить значение, 
// которое встретилось раньше

'use strict';

const zip = function (objects) {
    let res = {};
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        for (let key in arg) {
            if (!(key in res)) { 
                res[key] = arg[key];
            }
        }
    }
    return res;
};
