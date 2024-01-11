const Calculator = artifacts.require("Calculator");

contract('Calculator', (accounts) => {
    let calculator;

    before(async () => {
        calculator = await Calculator.deployed();
    });

    // Test case for the add function
    it('should return 15 for add(10, 5)', async () => {
        await calculator.add(10, 5);
        const result = await calculator.result();
        assert.equal(result.toNumber(), 15, "The result of 10 + 5 should be 15");
    });

    // Test case for the subtract function
    it('should return 5 for subtract(10, 5)', async () => {
        await calculator.subtract(10, 5);
        const result = await calculator.result();
        assert.equal(result.toNumber(), 5, "The result of 10 - 5 should be 5");
    });

    // Test case for the divide function
    it('should return 2 for divide(10, 5)', async () => {
        await calculator.divide(10, 5);
        const result = await calculator.result();
        assert.equal(result.toNumber(), 2, "The result of 10 / 5 should be 2");
    });

    // Test case for division by zero
    it('should fail for divide(10, 0)', async () => {
        try {
            await calculator.divide(10, 0);
            assert.fail("The transaction should have thrown an error");
        } catch (err) {
            assert.include(err.message, "Number cannot be zero", "The error message should contain 'Number cannot be zero'");
        }
    });

    // Test case for the multiply function
    it('should return 50 for multiply(10, 5)', async () => {
        await calculator.multiply(10, 5);
        const result = await calculator.result();
        assert.equal(result.toNumber(), 50, "The result of 10 * 5 should be 50");
    });

    // Add more test cases as needed
});
