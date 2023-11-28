import {describe, expect, test} from '@jest/globals';
import { sumDivisibles } from './main';

describe('sumDivisibles', () => {
    test('it should return 23 when the parameter is 10', () => {
        expect(sumDivisibles(10)).toBe(23);
    });

    test('it should return 33 when the parameter is 11', () => {
        expect(sumDivisibles(11)).toBe(33);
    });

    test('it should return 368 when the parameter is 40', () => {
        expect(sumDivisibles(40)).toBe(368);
    });
});

