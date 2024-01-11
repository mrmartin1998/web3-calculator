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

    // Add more test cases as needed
});
