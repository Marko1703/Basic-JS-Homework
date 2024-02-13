console.log("It's working");

// Calculator class handles calculator operations and state
class Calculator { 
    // Constructor initializes display element variables
    constructor(previousOperandTextEl, currentOperandTextEl) {
        this.previousOperandTextEl = previousOperandTextEl
        this.currentOperandTextEl = currentOperandTextEl
        this.clear()
    }

    clear() {
        this.currentOperand = " "
        this.previousOperand = " "
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === " ") return
        if (this.previousOperand !== " ") {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = " "
    };

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case "+": 
              computation = prev + current
              break
            case "-": 
              computation = prev - current
              break
            case "*": 
              computation = prev * current
              break
            case "÷": 
              computation = prev / current
              break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = " "
    }

    updateDisplay() {
        this.currentOperandTextEl.innerText = this.currentOperand
        this.previousOperandTextEl.innerText = this.previousOperand
    }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextEl = document.querySelector("[data-previous-operand]");
const currentOperandTextEl = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandTextEl, currentOperandTextEl) 

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener("click", button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener("click", button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener("click", button => {
    calculator.delete()
    calculator.updateDisplay()
})

console.log(currentOperandTextEl);
console.log(previousOperandTextEl);