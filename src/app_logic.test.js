import { capitalize, reverseString, calculator, caesarCipher } from "./app_logic";

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
    expect(caesarCipher("ABC", 1)).toBe("BCD");
})

test("Caeser Cipher: including a outside range 'z'", ()=> {
    expect(caesarCipher("XyZ", 3)).toBe("AbC");
})