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

function isPalindrome(text) {
    let clean = text.toLowerCase().replace(/[^a-z0-9]/g, ""); // Convertir a minúsculas y eliminar caracteres especiales
    let invested = clean.split("").reverse().join(""); // Invertir la cadena
    return clean === invested;
}

export {Hello, Suma, canDrinkInCol, orderArry,isPalindrome};

