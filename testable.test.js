import { translate } from './testable';

//it should display characters that I input. 

//it should translate those characters from English to morse code when I press "translate" or hit enter.

//it should continuously update the output display with the translated version of whatever I type into the input display.

//remember to do all the valid tests

describe("Testing translate() function converts English to morse", () => {
   

    it("Should return ` .- ` when `A` is entered", () => {
      let input = "A"
      let result = translate(input)
      expect(result).toBe(" .- ");
    })

    it("Should return ` -... ` when `B` is entered", () => {
        let input = "B"
        let result = translate(input)
        expect(result).toBe(" -... ");
      })

    it("Should return ` -.-. ` when `C` is entered", () => {
        let input = "C"
        let result = translate(input)
        expect(result).toBe(" -.-. ");
      })

      it("Should return ` .---   .-   -.-   . ` when `Jake` is entered", () => {
        let input = "Jake"
        let result = translate(input)
        expect(result).toBe(" .---   .-   -.-   . ");
      })

    it("Should return ` ....   .   .-..   .-..   ---    .--   ---   .-.   .-..   -.. ` when `Hello world` is entered", () => {
        let input = "Hello world"
        let result = translate(input)
        expect(result).toBe(" ....   .   .-..   .-..   ---    .--   ---   .-.   .-..   -.. ");
      })

    it("should return ` .---- ` when `1` is entered", () => {
        let input = "1"
        let result = translate(input)
        expect(result).toBe(` .---- `)
    })

    it("should return ` ..---   .---- ` when `21` is entered", () => {
        let input = "21"
        let result = translate(input)
        expect(result).toBe(` ..---   .---- `)
    })

    it("should return `` when `=` is entered", () => {
        let input = "="
        let result = translate(input)
        expect(result).toBe("")
    })

    it("should return ` ` when non letters or numbers are entered", () => {
        let input = "[]"
        let result = translate(input)
        expect(result).toBe(" ")
    })

    it("should return `` when `á` is entered", () => {
        let input = "á"
        let result = translate(input)
        expect(result).toBe("")
    })

})