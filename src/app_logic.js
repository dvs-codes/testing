
function capitalize(string) {
    let firstLetter = string[0].toUpperCase()
    let result = firstLetter + string.substr(1)

    return result
}

function reverseString(string) {
    let final = ""
    for (let i=1; i<=string.length; i++) {
        let tempstring = string.charAt(string.length-i)
        final = final.concat(tempstring)
    }
    return final
}

const calculator = {
    add(a,b) {
        return parseInt(a)+parseInt(b)
    },

    subtract(a,b) {
        return parseInt(a)-parseInt(b)
    },

    divide(a,b) {
        return parseInt(a)/parseInt(b)
    },

    multiply(a,b) {
        return parseInt(a)*parseInt(b)
    }
}

function caesarCipher(string, factor) {

    let convertedString = ""
    for (let i = 0; i<string.length; i++) {
        //case for uppercase alphabets
        if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
            let convertedCharCode = string.charCodeAt(i) + parseInt(factor)
            if (convertedCharCode >= 91 ) {
                convertedCharCode = convertedCharCode-26
                let convertedCharacter = String.fromCharCode(convertedCharCode) 
                convertedString = convertedString.concat(convertedCharacter)
            } else {
                let convertedCharacter = String.fromCharCode(convertedCharCode) 
                convertedString = convertedString.concat(convertedCharacter)
            }
        }
        //case for lowercase alphabets
        else if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
            let convertedCharCode = string.charCodeAt(i) + parseInt(factor)
            if (convertedCharCode >= 123 ) {
                convertedCharCode = convertedCharCode-26
                let convertedCharacter = String.fromCharCode(convertedCharCode) 
                convertedString = convertedString.concat(convertedCharacter)
            } else {
                let convertedCharacter = String.fromCharCode(convertedCharCode) 
                convertedString = convertedString.concat(convertedCharacter)
            }
        }
    }

    return convertedString
}
export {capitalize, reverseString, calculator, caesarCipher}