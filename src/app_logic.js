
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

export {capitalize, reverseString}