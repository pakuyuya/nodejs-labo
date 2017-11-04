'use strict';
const fs = require('fs');

let fd, result, stream, promise;

let timeWatch = (title, funcs) => {
    console.log(`------${title}------`);
    console.time('total');
    for (let func of funcs) {
        console.time('rap');
        func();
        console.timeEnd('rap');
    }
    console.timeEnd('total');
};

timeWatch ('readSync 1024bytes at once', [
    () => {
        fd = fs.openSync('./1024bytes.txt', 'r');
    },
    () => {
        result = (fs.readSync(fd, 1024, 0, 'utf-8'))[0];
    },
    () => {
        fs.closeSync(fd);
    }
]);
result = '';
timeWatch ('readSync 1024bytes at 1024 times', [
    () => {
        fd = fs.openSync('./1024bytes.txt', 'r');
    },
    () => {
        for (var i=0; i<1024; i++) {
            result += (fs.readSync(fd, 1, i, 'utf-8'))[0];
        }
    },
    () => {
        fs.closeSync(fd);
    }
]);
