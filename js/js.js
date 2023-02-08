// PALINDROMA
// Chiedere all utente di inserire una parola

// let word = prompt("inserire una parola")
// console.log("la parola è", word)

const ciao = "ciao" 
const sixaxis = "sixaxis"

// Creare una funzione per capire se la parola inserita è palindroma

let string = prompt("string")
console.log(string)

    let maiuscString = string.toUpperCase()
    console.log(maiuscString)
    console.log(maiuscString.length)

    let revString = ""

    for (i = maiuscString.length ; i > -1; i--) {

        console.log(i)
        console.log(maiuscString[i])
    
        revString += "maiuscString[i]"
        console.log(revString)
        
    }



// Comunicare all utente (decidete voi come) se la parola che ha inserito
// è palindroma oppure no


