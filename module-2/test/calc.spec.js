const { calc, Calc } = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator

    it('should be a function', () => {
        expect(calc).to.be.instanceOf(Function);
    });

    it('should return a number', () => {
        const c = calc(3).v;
        expect(c).to.be.a('number');
    });

    it('should handle if parameter is not a number', () => {
        expect(() => calc('a')).to.throw(TypeError);
    });

    it('should be proper value', () => {
        const c = calc(3).v;
        expect(c).to.equal(3);
    });

    describe('add', () => {
        it('should be a function', () => {
            const c = calc(3);
            expect(c.add).to.be.instanceOf(Function);
        });

        it('should return a calculator', () => {
            const c = calc(3);
            expect(c.add(5)).to.be.instanceOf(Calc);
        });

        it('should handle if parameter is not a number', () => {
            const c = calc(3);
            expect(() => c.add('a')).to.throw(TypeError);
        });

        it('should be able to add a number to the current value', () => {
            const c = calc(3);
            const result = c.add(5).v;
            expect(result).to.equal(8);
        });
    });

    describe('minus', () => {
        it('should be a function', () => {
            const c = calc(3);
            expect(c.minus).to.be.instanceOf(Function);
        });

        it('should return a calculator', () => {
            const c = calc(3);
            expect(c.minus(2)).to.be.instanceOf(Calc);
        });

        it('should handle if parameter is not a number', () => {
            const c = calc(3);
            expect(() => c.minus('a')).to.throw(TypeError);
        });

        it('should be able to substract a number from the current value', () => {
            const c = calc(3);
            const result = c.minus(2).v;
            expect(result).to.equal(1);
        });
    });

    describe('sqrt', () => {
        it('should be a function', () => {
            const c = calc(3);
            expect(c.sqrt).to.be.instanceOf(Function);
        });

        it('should return a calculator', () => {
            const c = calc(4);
            expect(c.sqrt()).to.be.instanceOf(Calc);
        });

        it('should be able to calculate the square root of a number', () => {
            const c = calc(4);
            const result = c.sqrt().v;
            expect(result).to.equal(2);
        });

        it('should be handle square root of a negative number', () => {
            const c = calc(-2);
            expect(() => c.sqrt()).to.throw('Square');
        });

        it('should be handle square root of 0', () => {
            const c = calc(0);
            const result = c.sqrt().v;
            expect (result).to.equal(0);
        });

        it('should be handle square root of -1', () => {
            const c = calc(-1);
            expect(() => c.sqrt()).to.throw('Square');
        });

        it('should be handle square root of 1', () => {
            const c = calc(1);
            const result = c.sqrt().v;
            expect (result).to.equal(1);
        });
    });

    describe('times', () => {
        it('should be a function', () => {
            const c = calc(3);
            expect(c.times).to.be.instanceOf(Function);
        });

        it('should return a calculator', () => {
            const c = calc(2);
            expect(c.times(10)).to.be.instanceOf(Calc);
        });

        it('should handle if parameter is not a number', () => {
            const c = calc(3);
            expect(() => c.times('a')).to.throw(TypeError);
        });

        it('should be able to multiply by a number with the current value', () => {
            const c = calc(3);
            const result = c.times(10).v;
            expect(result).to.equal(30);
        });
    });

    describe('divide', () => {
        it('should be a function', () => {
            const c = calc(3);
            expect(c.divide).to.be.instanceOf(Function);
        });

        it('should return a calculator', () => {
            const c = calc(10);
            expect(c.divide(2)).to.be.instanceOf(Calc);
        });

        it('should handle if parameter is not a number', () => {
            const c = calc(10);
            expect(() => c.divide('a')).to.throw(TypeError);
        });

        it('should be able to perform a valid division', () => {
            const c = calc(10);
            const result = c.divide(2).v;
            expect(result).to.equal(5);
        });

        it('should handle division by 0', () => {
            const c = calc(10);
            expect(() => c.divide(0)).to.throw('Division')
        });
    });

    describe('modulo', () => {
        it('should be a function', () => {
            const c = calc(3);
            expect(c.modulo).to.be.instanceOf(Function);
        });

        it('should return a number', () => {
            const c = calc(10);
            expect(c.modulo(5)).to.be.instanceOf(Calc);
        });

        it('should handle if parameter is not a number', () => {
            const c = calc(10);
            expect(() => c.modulo('a')).to.throw(TypeError);
        });

        it('should be able to return the remainder of a division of two numbers', () => {
            const c = calc(10);
            const result = c.modulo(5).v;
            expect(result).to.equal(0);
        });

        it('should handle dividion by 0', () => {
            const c = calc(13);
            expect(() => c.modulo(0)).to.throw('Divider');
        });
    });

    it('should be able to calculate multiple operations', () => {
        const c = calc(3);
        const result = c.add(4).minus(3).times(6).v;
        expect(result).to.equal(24);
    });
});