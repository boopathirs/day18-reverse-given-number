let rev = 0;
let num;
let lastdigit;
function reverse(num){
while(num!=0){
    lastdigit = num%10;
    rev = rev*10+lastdigit;
    num = Math.floor(num/10);
}
return rev;
}
let result = reverse(2345);
console.log(result);