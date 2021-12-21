import { expect } from '@jest/globals';
import { letterCombinations } from '../src/17.电话号码的字母组合.js'

test('letterCombinations 23', () => {
  expect(letterCombinations('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
})
