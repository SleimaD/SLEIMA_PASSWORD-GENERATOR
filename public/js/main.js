//? possible characters
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()";

let allCharacters = upperCaseLetters + lowerCaseLetters + numbers + symbols; //? combine these characters into a string





function getRandomCharacter(e) {
    let i = Math.floor(Math.random() * e.length);
    return e[i];
} //? function to generate a random character

 

function generatePassword(length) { //? function to generate a password 
    let mdp = ""; //? Initialize the password string
    let mot = ""; //? Initialize the character set string
  
    if (document.getElementById("maj").checked) {
        mot += upperCaseLetters;
    }     //? Check if the uppercase letters checkbox is checked

  
    if (document.getElementById("min").checked) {
        mot += lowerCaseLetters;
    }     //? if the lowercase checkbox is checked

  
    if (document.getElementById("numbers").checked) {
        mot += numbers;
    }     //? if the numbers checkbox is checked

  
    if (document.getElementById("symbols").checked) {
        mot += symbols;
    }     //? Check if the symbols checkbox is checked
  
    if (mot === "") {
        alert("select at least one character type");
        return;
    }     //? If no checkboxes are checked, shows error message

  
    for (let i = 0; i < length; i++) {
        mdp += getRandomCharacter(mot);
    }  //? Generate the password by appending random characters from the character set
  
    return mdp;
}
  


let lepassword // Variable to store the generated password


document.getElementById("generate").addEventListener("click", () => {
    
    let length = document.getElementById("length").value; //? Get the desired password length
    let password = generatePassword(length); //? Generate the password
    document.getElementById("result").innerText = password; //? Display the password in the #result paragraph
    lepassword = document.getElementById("result").innerText  //? Store the generated password in the lepassword variable
});


//? Function to copy the generated password to the clipboard
function copy() {
    let copyText = lepassword; //? Get the generated password
    navigator.clipboard.writeText(copyText)
        .then(() => {
            alert("Copied the text: " + copyText); //? Show a success message
        })
}



let btnCopy = document.querySelector("button") // Select the copy button


btnCopy.addEventListener("click",()=>{
    copy()   //? Call the copy function when the button is clicked
})
 



