function XO(str) {
 let countX = 0
 let countO = 0
 for(let i =0; i < str.length; i++){
    if(str.charAt(i) === 'X' || str.charAt(i) === 'x'){
    countX++}
    if(str.charAt(i) === 'o' || str.charAt(i) === 'O'){
    countO++}}
    if (countO === countX){
 return true
    } else return false
 }