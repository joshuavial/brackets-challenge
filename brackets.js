const matchingBrackets = {
  '(': ')',
  '[': ']',
  '{': '}'
}
function brackets(str) {
  const openingBrackets = []
  for(let i = 0; i < str.length; i++) {
    let character = str[i]
    if (isOpeningBracket(character)) {
      openingBrackets.push(character)
    } else if (isClosingBracket(character)) {
      if (lastOpeningBracketMismatched(openingBrackets, character) ) return false
      openingBrackets.pop()
    }
  }
  return openingBrackets.length == 0
}

function isOpeningBracket(character) {
  return Object.keys(matchingBrackets).indexOf(character) >= 0
}

function isClosingBracket(character) {
  return Object.values(matchingBrackets).indexOf(character) >= 0
}

function lastOpeningBracketMismatched(openingBrackets, character) {
  return matchingBrackets[openingBrackets[openingBrackets.length-1]] != character
}

module.exports = brackets
