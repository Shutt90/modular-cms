const capitalize = function(word) {
    const splitWord = word.split('/')
    const lettered = splitWord.slice(-1)
    const string = lettered[0].split('')
    const capitalize = string[0].toUpperCase()
    string.shift()
    string.unshift(capitalize)
    const capitalized = string.join('')

    return capitalized
}

const decapitalize = function(word) {
    const splitWord = word.split('/')
    const lettered = splitWord.slice(-1)
    const string = lettered[0].split('')
    const capitalize = string[0].toLowerCase()
    string.shift()
    string.unshift(capitalize)
    const decapitalized = string.join('')

    return decapitalized
}

const removeSpaces = function(word) {
    const noSpaces = word.replace(' ', '')

    return noSpaces
}

const removedUndefined = function(value) {
    if(value === undefined) {
        return ''
    } else {
        return value
    }

}

export { capitalize, decapitalize, removeSpaces, removedUndefined}