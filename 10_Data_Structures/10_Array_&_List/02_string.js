// Split
let str1 = 'g.a.r.e.t.t'
str1 = str1.split('.')
console.log(str1)

// Join
let str2 = 'garett';
str2 = str2.split('');
str2 = str2.join('-')
console.log(str2)

// Includes
str3 = 'xo'
if(str3.includes('o')){
    console.log('xo contains the character o');
}