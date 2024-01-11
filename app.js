// Global variables
let web3;
let contractInstance;
let accounts;
let operation = '';

// Function to initialize Web3 and the contract instance
async function initializeWeb3AndContract() {
    web3 = new Web3(window.ethereum);
    accounts = await web3.eth.getAccounts();
    const abi = [
      {
        "inputs": [],
        "name": "result",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "a",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "b",
            "type": "uint256"
          }
        ],
        "name": "add",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "a",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "b",
            "type": "uint256"
          }
        ],
        "name": "subtract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "a",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "b",
            "type": "uint256"
          }
        ],
        "name": "divide",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "a",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "b",
            "type": "uint256"
          }
        ],
        "name": "multiply",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]; // Replace with your ABI
    const contractAddress = '0x914aDedF55Dc661De6425dE9BD4b215E4197c055';
    contractInstance = new web3.eth.Contract(abi, contractAddress);
    console.log("Web3 and Contract Initialized");
}

// Function to connect to MetaMask
async function connectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Connected to MetaMask");
            await initializeWeb3AndContract();
        } catch (error) {
            console.error("User denied account access:", error);
        }
    } else {
        console.error("MetaMask is not installed!");
    }
}

// Function to add a number to the display
function addToDisplay(number) {
    const display = document.getElementById("display");
    display.value += number;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

// Function to set the operation (+, -, *, /)
function setOperation(op) {
    operation = op;
    addToDisplay(op);
}

// Function to perform the calculation
async function calculate() {
    const display = document.getElementById("display");
    const values = display.value.split(operation);

    if (values.length < 2) {
        alert("Invalid operation");
        return;
    }

    const a = parseInt(values[0]);
    const b = parseInt(values[1]);

    if (!accounts || accounts.length === 0) {
        alert("No accounts found. Please ensure MetaMask is connected.");
        return;
    }

    try {
        let transaction;
        switch (operation) {
            case '+':
                transaction = contractInstance.methods.add(a, b);
                break;
            case '-':
                transaction = contractInstance.methods.subtract(a, b);
                break;
            case '*':
                transaction = contractInstance.methods.multiply(a, b);
                break;
            case '/':
                transaction = contractInstance.methods.divide(a, b);
                break;
            default:
                alert("Invalid operation");
                return;
        }

        const result = await transaction.send({ from: accounts[0] });

        const updatedResult = await contractInstance.methods.result().call();
        display.value = updatedResult;
    } catch (error) {
        console.error("Error in executing contract method:", error);
        alert("An error occurred. Check the console for more details.");
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    connectMetaMask();
});
