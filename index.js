//
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "01234567890"
const dataSymbols = "$_-^&é";

function generatePassword() {
    let data = []
    if (lowercase.checked) data.push(dataLowercase);
    if (lowercase.checked) data.push(dataUppercase);
    if (lowercase.checked) data.push(dataNumbers);
    if (lowercase.checked) data.push(dataSymbols);
    
    console.log(data);
    
}

generateButton.assEventListener('click',generatePassword)
