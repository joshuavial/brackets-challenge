function brackets(str) {
  let newStr = removeParentheses(str)
  newStr = removeBraces(newStr)
  newStr = removeSquareBrackets(newStr)
  if (newStr.length == str.length) {
    return !newStr.match(/[\(\)\{\}\[\]]/)
  }
  return brackets(newStr)
}

function removeParentheses(str) {
  return str.replace(/\([^\{\}\[\]\(\)]*\)/g, '')
}

function removeBraces(str) {
  return str.replace(/\{[^\{\}\[\]\(\)]*\}/g, '')
}
function removeSquareBrackets(str) {
  return str.replace(/\[[^\{\}\[\]\(\)]*\]/g, '')
}

module.exports = brackets
