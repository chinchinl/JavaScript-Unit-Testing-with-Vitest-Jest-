import { describe, test, it, expect } from "vitest";
import { max, fizzBuzz, calculateAverage, factorial} from "../src/intro";

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        // AAA: Arrage, act, assert
        expect(max(2, 1)).toBe(2)
    })
    it('should return the second argument if it is greater', () => {
        // AAA: Arrage, act, assert
        expect(max(1, 2)).toBe(2)
    })
    it('should return the first argument are equal', () => {
        // AAA: Arrage, act, assert
        expect(max(1, 1)).toBe(1)
    })
})

describe('fizzBuzz', () => {
    it("should return FizzBuzz if arg is divisible by by 3 and 5", () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })
    it("should return Fizz if arg is only divisible by 3", () => {
        expect(fizzBuzz(9)).toBe('Fizz')
    })
    it("should return Buzz if arg is only divisible by 5", () => {
        expect(fizzBuzz(20)).toBe('Buzz')
    })
    it("should return arg as string if arg is not divisible by 3 or 5", () => {
        expect(fizzBuzz(1)).toBe('1')
    })
})

describe('calculateAverage', () => {
    it("should return NaN for empty array", () => {
        expect(calculateAverage([])).toBe(NaN)
    })
    it("should caculate the average of an array with a single element", () => {
        expect(calculateAverage([1])).toBe(1)
    })
    it("should caculate the average of an array with a two element", () => {
        expect(calculateAverage([1,2])).toBe(1.5)
    })
    it("should caculate the average of an array with a three element", () => {
        expect(calculateAverage([1,2,3])).toBe(2)
    })
})

describe('factorial', () => {
    it("should return 1 if given 0", ()=>{
        expect(factorial(0)).toBe(1)
    })
    it("should return 1 if given 1", ()=>{
        expect(factorial(1)).toBe(1)
    })
    it("should return 2 if given 2", ()=>{
        expect(factorial(2)).toBe(2)
    })
    it("should return 24 if given 4", ()=>{
        expect(factorial(4)).toBe(24)
    })
    it("should return undefined if given a negative number", ()=>{
        expect(factorial(-2)).toBe(undefined)
    })
})