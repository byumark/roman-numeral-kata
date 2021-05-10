const { arabicToRoman } = require('./convert')

test('converts 1 to I', () => {
  expect(arabicToRoman(1)).toBe('I')
})

test('converts 2 to II', () => {
  expect(arabicToRoman(2)).toBe('II')
})

test('converts 3 to III', () => {
  expect(arabicToRoman(3)).toBe('III')
})

test('converts 4 to IV', () => {
  expect(arabicToRoman(4)).toBe('IV')
})

test('converts 5 to V', () => {
  expect(arabicToRoman(5)).toBe('V')
})

test('converts 6 to VI', () => {
  expect(arabicToRoman(6)).toBe('VI')
})

test('converts 7 to VII', () => {
  expect(arabicToRoman(7)).toBe('VII')
})

test('converts 8 to VII', () => {
  expect(arabicToRoman(8)).toBe('VIII')
})

test('converts 9 to IX', () => {
  expect(arabicToRoman(9)).toBe('IX')
})

test('converts 10 to X', () => {
  expect(arabicToRoman(10)).toBe('X')
})

test('converts 11 to XI', () => {
  expect(arabicToRoman(11)).toBe('XI')
})

test('converts 12 to XII', () => {
  expect(arabicToRoman(12)).toBe('XII')
})

test('converts 14 to XIV', () => {
  expect(arabicToRoman(14)).toBe('XIV')
})

test('converts 15 to XV', () => {
  expect(arabicToRoman(15)).toBe('XV')
})

test('converts 17 to XVII', () => {
  expect(arabicToRoman(17)).toBe('XVII')
})

test('converts 19 to XIX', () => {
  expect(arabicToRoman(19)).toBe('XIX')
})
