// PALINDROMA
// Chiedere all utente di inserire una parola

let word = prompt("inserire una parola")
console.log("la parola è", word)

// Creare una funzione per capire se la parola inserita è palindroma (VEDI IN FONDO)


// Comunicare all utente (decidete voi come) se la parola che ha inserito
// è palindroma oppure no

console.log(isPalindrome(word))




// PARI E DISPARI
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

let pick = ""
let lowerCasePick = ""

while (lowerCasePick != "pari" && lowerCasePick != "dispari") {

    pick = prompt("pari o dispari")
    console.log(pick)

    lowerCasePick = pick.toLowerCase()
    console.log(lowerCasePick)
}

let userNum = prompt("scegli un numero da 1 a 5")
console.log(userNum)

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

let cpuNum = 0

randMinMax(cpuNum, 1, 5)
console.log(randMinMax(cpuNum, 1, 5))

// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Comunichiamo all’utente chi ha vinto. (decidete voi come)



// FUNCTIONS

function isPalindrome(string) {

    let maiuscString = string.toUpperCase()
    let revString = ""

    for (i = maiuscString.length - 1; i > -1; i--) {
    
        revString += maiuscString[i]  
    }

    if ( revString === maiuscString) {
        return true
    } else {
        return false
    }
}

function randMinMax(variable, min, max) {

    variable = Math.floor(Math.random() * (max - min + 1)) + min

    return variable
}