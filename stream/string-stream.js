'use strict';

const stream = require('stream');


// string stream
const Readable = stream.Readable;

let str_stream = new Readable;
str_stream.push('test'); // StreamにプReadできる文字列をpush。ただし、Syncだとreadするところまでデータがいかないらしく
str_stream.push(null);   // このようにpush(null)で意図的にflush（？）させる必要がある。

console.log(str_stream.read().toString('utf-8')); // readで全読み
console.log(str_stream.read()); // 読み来れない場合はnull