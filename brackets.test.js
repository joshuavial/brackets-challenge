const brackets = require('./brackets')
test('empty string', () => {
  expect(brackets("")).toBe(true)
})

test('string without brackets', () => {
  expect(brackets("asdfs")).toBe(true)
})

test('empty brackets are true', () => {
  expect(brackets('{}')).toBe(true)
  expect(brackets('[]')).toBe(true)
  expect(brackets('()')).toBe(true)
})

test('single brackets to be false', () => {
  expect(brackets('{')).toBe(false)
  expect(brackets('[')).toBe(false)
  expect(brackets('(')).toBe(false)
  expect(brackets('}')).toBe(false)
  expect(brackets(']')).toBe(false)
  expect(brackets(')')).toBe(false)
})

test('mismatched brackets to be false', () => {
  expect(brackets('{([)]}')).toBe(false)
  expect(brackets('[([])}')).toBe(false)
})

test('matching brackets to be true', () => {
  expect(brackets('{()[]}')).toBe(true)
  expect(brackets('{({})[{}]}')).toBe(true)
  expect(brackets('{all({sdf})[dd{}]}')).toBe(true)
})
//"asdfsd"
//"{(asds)[d]fds}"
//"()"
//"[]"
