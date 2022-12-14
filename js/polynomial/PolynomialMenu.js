function poly() {
    function operandHandler(e) {
        const calc = new PolynomialCalculator();
        const num1 = document.getElementById('poly-num1');
        const num2 = document.getElementById('poly-num2');
        const a = calc.getPolynomial(num1.value);
        const b = calc.getPolynomial(num2.value);
        const operand = e.target.dataset.operand;
        const c = calc[operand](a, b);
        document.getElementById('poly-result').innerHTML = (c) ? (c.toString() ? c.toString() : '0') : 'Ошибка';
    }
    document.querySelectorAll('.poly-op').
        forEach(e => e.addEventListener('click', operandHandler));
}