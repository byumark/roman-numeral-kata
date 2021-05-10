const lookup = [
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
]

function arabicToRoman(number) {
  if (number === 0) return ''
  const [arabic, roman] = lookup.find(x => x[0] <= number)
  return roman + arabicToRoman(number - arabic)
}

module.exports = {
  arabicToRoman,
}
