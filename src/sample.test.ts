import { describe, it, expect } from 'vitest';
import { greet } from './sample';

describe('Sample Function', () => {
    it('should return a greeting', () => {
        const result = greet('World');
        expect(result).toBe('Hello, World!');
    });
});