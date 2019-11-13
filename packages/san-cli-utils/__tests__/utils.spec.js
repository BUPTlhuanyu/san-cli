/**
 * @file utils test
 */

import {
    flatten
} from '../utils';

describe('测试flatten', () => {
    test('空数组', () => {
         expect(flatten([])).toEqual([]);
    });
    test('一维数组', () => {
        expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });
    test('二维数组', () => {
        expect(flatten([[1, 2, 3], 4, 5, 6, []])).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
