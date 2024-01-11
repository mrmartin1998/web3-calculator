# Web3 Calculator

## Description

The Web3 Calculator is a decentralized application (dApp) that showcases a simple calculator functioning on the Ethereum blockchain. This project is designed to demonstrate the integration of blockchain technology with basic web applications, providing a practical example of smart contract utilization.

## Technologies Used

- **Solidity**: For writing the Ethereum smart contract.
- **HTML/CSS/JavaScript**: For creating the interactive user interface.
- **Truffle**: As a development environment for Ethereum.
- **Ganache**: For setting up a personal Ethereum blockchain for development.
- **Web3.js**: A JavaScript library for Ethereum blockchain interaction.
- **MetaMask**: For wallet management and Ethereum transactions.

## Smart Contract

The `Calculator.sol` smart contract is at the heart of this application. It includes functions for basic arithmetic operations:

1. **Add, Subtract, Multiply, Divide**: Functions to perform respective arithmetic operations.
2. **Result Storage**: Each operation's result is stored on the blockchain.
3. **Event Emission**: The contract emits an event after each operation, which the UI uses to display results.

## Front-End

The front-end is designed to be user-friendly:

- `index.html`: The main interface for user interaction.
- `app.js`: Handles smart contract interactions and updates the UI accordingly.

### Installation

1. **Clone the Repository**: Get a local copy of the project.
2. **Blockchain Setup**: Use Truffle and Ganache for a local blockchain setup.
3. **Deploy the Contract**: Compile and migrate the smart contract to your local blockchain.
4. **Front-End Configuration**: Update the contract address and ABI in `app.js` based on your contract deployment.

### Usage

1. **Open the Application**: Run `index.html` in a web browser.
2. **MetaMask Connection**: Ensure MetaMask is connected to your Ethereum setup.
3. **Use the Calculator**: Perform operations and view blockchain-stored results.

### Future Enhancements

- **UI Improvements**: Enhance the calculator's interface in version 2 for better user experience.
- **Extended Functionality**: Add more complex mathematical functions.
- **Blockchain Features**: Implement additional blockchain-specific features.

