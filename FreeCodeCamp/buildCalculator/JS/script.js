const { useState } = React;

function Calculator() {
    const [input, setInput] = useState("0");
    const [currentValue, setCurrentValue] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);
    const [lastInputWasOperator, setLastInputWasOperator] = useState(false);

    const handleNumberClick = (number) => {
        if (waitingForOperand) {
            setInput(number);
            setWaitingForOperand(false);
        } else {
            setInput((prev) => (prev === "0" ? number : prev + number));
        }
        setLastInputWasOperator(false);
    };

    const handleOperatorClick = (nextOperator) => {
        const inputValue = parseFloat(input);

        if (currentValue === null) {
            setCurrentValue(inputValue);
        } else if (operator) {
            if (!waitingForOperand) {
                const currentValueCalc = currentValue || 0;
                const newValue = calculate(currentValueCalc, inputValue, operator);
                setCurrentValue(newValue);
                setInput(String(newValue));
            }
        }

        if (nextOperator === "-" && lastInputWasOperator) {
            setInput("-");
            setWaitingForOperand(false);
            setLastInputWasOperator(true);
        } else {
            setWaitingForOperand(true);
            setOperator(nextOperator);
            setLastInputWasOperator(true);
        }
    };

    const calculate = (firstValue, secondValue, operator) => {
        if (operator === "+") {
            return firstValue + secondValue;
        } else if (operator === "-") {
            return firstValue - secondValue;
        } else if (operator === "*") {
            return firstValue * secondValue;
        } else if (operator === "/") {
            return firstValue / secondValue;
        }
        return secondValue;
    };

    const handleEqualClick = () => {
        const inputValue = parseFloat(input);

        if (operator && !waitingForOperand) {
            const currentValueCalc = currentValue || 0;
            const newValue = calculate(currentValueCalc, inputValue, operator);

            setInput(String(newValue.toFixed(4))); // 4 decimal places precision
            setCurrentValue(newValue);
            setOperator(null);
            setWaitingForOperand(true);
        }
    };

    const handleClearClick = () => {
        setInput("0");
        setCurrentValue(null);
        setOperator(null);
        setWaitingForOperand(false);
        setLastInputWasOperator(false);
    };

    const handleDecimalClick = () => {
        if (waitingForOperand) {
            setInput("0.");
            setWaitingForOperand(false);
        } else if (!input.includes(".")) {
            setInput(input + ".");
        }
    };

    return (
        <div className="calculator">
            <div id="display" className="display">{input}</div>
            <button id="clear" className="button clear" onClick={handleClearClick}>C</button>
            <button id="divide" className="button" onClick={() => handleOperatorClick("/")}>/</button>
            <button id="multiply" className="button" onClick={() => handleOperatorClick("*")}>*</button>
            <button id="seven" className="button" onClick={() => handleNumberClick("7")}>7</button>
            <button id="eight" className="button" onClick={() => handleNumberClick("8")}>8</button>
            <button id="nine" className="button" onClick={() => handleNumberClick("9")}>9</button>
            <button id="subtract" className="button" onClick={() => handleOperatorClick("-")}>-</button>
            <button id="four" className="button" onClick={() => handleNumberClick("4")}>4</button>
            <button id="five" className="button" onClick={() => handleNumberClick("5")}>5</button>
            <button id="six" className="button" onClick={() => handleNumberClick("6")}>6</button>
            <button id="add" className="button" onClick={() => handleOperatorClick("+")}>+</button>
            <button id="one" className="button" onClick={() => handleNumberClick("1")}>1</button>
            <button id="two" className="button" onClick={() => handleNumberClick("2")}>2</button>
            <button id="three" className="button" onClick={() => handleNumberClick("3")}>3</button>
            <button id="equals" className="button" onClick={handleEqualClick}>=</button>
            <button id="zero" className="button zero" onClick={() => handleNumberClick("0")}>0</button>
            <button id="decimal" className="button" onClick={handleDecimalClick}>.</button>
        </div>
    );
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
