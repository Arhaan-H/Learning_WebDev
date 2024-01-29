/*
you are given an array arr and a number num.
for range 1 to num, 
if a number is divisible by 3, push string "devs"
if a number is divisible by 4, push string "nest"
if a number is divisible by both 3 and 4, push string "devsnest"
into the array arr
hint: you will require to use a for loop, if else condition and an operator to check divisiblity
*/
const num = 100, arr = []

/* code from here */
let i=1
while(i<num){
  i=i+1
  if(i%3==0 && i%4==0){
    arr.push("devsnest");
  }
  else if(i%3==0){
    arr.push("devs");
  }
  else if(i%4==0){
    arr.push("nest");
  }
}

/* to here */

try { module.exports = { arr } } catch (e) {}