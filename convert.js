const lookup = [
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
]

function arabicToRoman(arabic) {
  if (arabic === 0) return ''
  const [arabicConversion, romanConversion] = lookup.find(x => x[0] <= arabic)
  return romanConversion + arabicToRoman(arabic - arabicConversion)
}

module.exports = {
  arabicToRoman,
}
