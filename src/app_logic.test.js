import { capitalize, reverseString, calculator, caesarCipher,analyzeArray } from "./app_logic";

test("capitalize the first character of string ", ()=> {
    expect(capitalize("lion")).toBe("Lion");
})

test("reverse the string ", ()=> {
    expect(reverseString("joker")).toBe("rekoj");
})

test("calculator: add ", ()=> {
    expect(calculator.add(2,3)).toBe(5);
})

test("calculator: substract ", ()=> {
    expect(calculator.subtract(10,4)).toBe(6);
})

test("calculator: divide ", ()=> {
    expect(calculator.divide(40,4)).toBe(10);
})

test("calculator: multiply ", ()=> {
    expect(calculator.multiply(40,4)).toBe(160);
})

test("Caeser Cipher: within the range", ()=> {
    expect(caesarCipher("ABC", 26)).toBe("ABC");
})

test("Caeser Cipher: including a outside range z and negative", ()=> {
    expect(caesarCipher("XyZ", 5)).toBe("CdE");
})

test("analyze Array: take array and give av, min max and length", ()=> {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
})
