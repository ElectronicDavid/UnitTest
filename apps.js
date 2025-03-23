const Hello= () => {
    return 'hello';
}

function Suma (a,b) {
return a + b;
} 

function canDrinkInCol(year){
if(year < 18){
    return false;
}
else return true;
} 

function orderArry(arr) {
return arr.sort((a, b) => a - b); 
}

function HelloJaveriana(){
    return "Hola Compañeros";
}

export {Hello, Suma, canDrinkInCol, orderArry,isPalindrome, HelloJaveriana};