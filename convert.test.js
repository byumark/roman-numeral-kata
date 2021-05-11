const { arabicToRoman } = require('./convert')

describe('#convert', () => {
  describe('#arabicToRoman', () => {
    it('should convert 1 to I', () => {
      expect(arabicToRoman(1)).toBe('I')
    })

    it('should convert 2 to II', () => {
      expect(arabicToRoman(2)).toBe('II')
    })

    it('should convert 3 to III', () => {
      expect(arabicToRoman(3)).toBe('III')
    })

    it('should convert 4 to IV', () => {
      expect(arabicToRoman(4)).toBe('IV')
    })

    it('should convert 5 to V', () => {
      expect(arabicToRoman(5)).toBe('V')
    })

    it('should convert 6 to VI', () => {
      expect(arabicToRoman(6)).toBe('VI')
    })

    it('should convert 7 to VII', () => {
      expect(arabicToRoman(7)).toBe('VII')
    })

    it('should convert 8 to VII', () => {
      expect(arabicToRoman(8)).toBe('VIII')
    })

    it('should convert 9 to IX', () => {
      expect(arabicToRoman(9)).toBe('IX')
    })

    it('should convert 10 to X', () => {
      expect(arabicToRoman(10)).toBe('X')
    })

    it('should convert 11 to XI', () => {
      expect(arabicToRoman(11)).toBe('XI')
    })

    it('should convert 12 to XII', () => {
      expect(arabicToRoman(12)).toBe('XII')
    })

    it('should convert 14 to XIV', () => {
      expect(arabicToRoman(14)).toBe('XIV')
    })

    it('should convert 15 to XV', () => {
      expect(arabicToRoman(15)).toBe('XV')
    })

    it('should convert 17 to XVII', () => {
      expect(arabicToRoman(17)).toBe('XVII')
    })

    it('should convert 19 to XIX', () => {
      expect(arabicToRoman(19)).toBe('XIX')
    })
  })
})
