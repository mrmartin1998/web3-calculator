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

    // You can add more test cases here for other functionalities
});
