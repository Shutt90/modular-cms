const singleWordCapitalize = function(word) {
    const splitWord = word.split('/')
    const lettered = splitWord.slice(-1)
    const string = lettered[0].split('')
    const capitalize = string[0].toUpperCase()
    string.shift()
    string.unshift(capitalize)
    const capitalizedWord = string.join('')

    return capitalizedWord
}

export default singleWordCapitalize