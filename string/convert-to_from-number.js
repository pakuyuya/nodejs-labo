'use strict';

// to number
console.log(+"10");
console.log("10"-0);

// to codepoint
console.log("1".charCodeAt(0)); // 49 (as Unicode)
console.log("あ".charCodeAt(0)); // 12354 (as Unicode)

// from number
console.log((2).toString());
console.log("" + 2);

// from codepoint
console.log(String.fromCharCode(65));