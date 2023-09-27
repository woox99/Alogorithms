// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

// let myNumber = 42;
// let myName = 'Garett';
// [myNumber, myName] = [myName, myNumber];
// console.log(myNumber, myName);

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

// for(i=-5; i<=1066; i++){
//     console.log(i);
// }

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

// const beCheerful = () => {
//     console.log('good moring!');
// }

// for(i=0; i<98; i++){
//     beCheerful();
// }

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

// for(i=-300; i<=0; i+=3){
//     if(i!=-3 && i!=-6){
//         console.log(i);
//     }
// }

// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

// let i = 2000;
// while(i!=5281){
//     console.log(i);
//     i++
// }

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

// const birthday = (month, day) => {
//     testOne = month == 7 || month == 16 ? true : false;
//     testTwo = day == 7 || day == 16 ? true : false;
//     if(testOne && testTwo && month!=day){
//         console.log('How did you know?')
//     } else{
//         console.log('Just another day..')
//     }
// }

// birthday(16, 7);

// Leap Year
// Write a function that determines whether a given year is a leap year. 
// If a year is divisible by four, it is a leap year, unless it is divisible by 100. 
// However, if it is divisible by 400, then it is.

// const isLeapYear = year => {
//     let isLeap = false;
//     if(year % 4 == 0){
//         if(year % 100 == 0 && year % 400 != 0){
//             return isLeap;
//         }
//         else{
//             isLeap = true;
//         }
//     }
//     return isLeap
// }
// console.log(isLeapYear(300));

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

// let count = 0;
// for(i=512; i<= 4096; i++){
//     if(i % 5 == 0){
//         console.log(i);
//         count ++;
//     }
// }
// console.log('count: ' + count);

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

// let sum = 0;
// for(i=-300000; i<= 300000; i++){
//     if(i % 2 != 0){
//         sum += i;
//     }
// }
// console.log(sum);


// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

// let i = 2016;
// while(i > 0){
//     console.log(i);
//     i -= 4;
// }

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, 
// print multiples of mult from highNum down to lowNum, using a FOR. 
// For (2,9,3), print 9 6 3 (on successive lines).

// const countDown = (low, high, mult) => {
//     for( i = high; i >= low; i -= mult){
//         console.log(i);
//     }
// }
// countDown(2, 9, 3);

// The Final Countdown
// This is based on “Flexible Countdown”. 
// The parameter names are not as helpful, but the problem is essentially identical; 
// don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, 
// starting at param2 and extending to param3. One exception: if a multiple is equal to param4, 
// then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), 
// print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

// const finalCountDown = (param1, param2, param3, param4) => {
//     let i = param2;
//     while( i <= param3){
//         if( i % param1 == 0 && i != param4)
//         console.log(i)
//         i++;
// }
// }

// finalCountDown(3,5,17,9)