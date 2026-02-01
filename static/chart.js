

document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const amountInput = document.getElementById('amount2');
    const amountRange = document.getElementById('amount-range2');
    const monthsInput = document.getElementById('months2');
    const monthsRange = document.getElementById('months-range2');
    const rateInput = document.getElementById('rate2');
    const rateRange = document.getElementById('rate-range2');
    const calculateBtn = document.getElementById('calculate2');
    const resultsDiv = document.getElementById('results2');
    const monthlyPaymentSpan = document.getElementById('monthly-payment2');
    const totalPaymentSpan = document.getElementById('total-payment2');
    const overpaymentSpan = document.getElementById('overpayment2');

    // Синхронизация ползунков и числовых полей
    amountInput.addEventListener('input', () => {
        amountRange.value = amountInput.value;
    });

    amountRange.addEventListener('input', () => {
        amountInput.value = amountRange.value;
    });

    monthsInput.addEventListener('input', () => {
        monthsRange.value = monthsInput.value;
    });

    monthsRange.addEventListener('input', () => {
        monthsInput.value = monthsRange.value;
    });

    rateInput.addEventListener('input', () => {
        rateRange.value = rateInput.value;
    });

    rateRange.addEventListener('input', () => {
        rateInput.value = rateRange.value;
    });

    // Функция расчета аннуитетного платежа
    function calculateLoan(amount2, months2, annualRate2) {
        const monthlyRate = annualRate / 100 / 12;
        const monthlyPayment = amount2 *
            (monthlyRate * Math.pow(1 + monthlyRate, months2)) /
            (Math.pow(1 + monthlyRate, months2) - 1);

        const totalPayment = monthlyPayment * months2;
        const overpayment = totalPayment - amount2;

        return {
            monthlyPayment: monthlyPayment,
            totalPayment: totalPayment,
            overpayment: overpayment
        };
    }

    // Функция форматирования числа в денежный формат
    function formatCurrency(value) {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    }

    // Обработчик нажатия кнопки "Рассчитать"
    calculateBtn.addEventListener('click', function() {
        const amount2 = parseFloat(amountInput.value);
        const months2 = parseInt(monthsInput.value);
        const annualRate2 = parseFloat(rateInput.value);

        // Валидация
        if (amount2 <= 0  months2 <= 0  annualRate <= 0) {
            alert('Пожалуйста, введите корректные значения');
            return;
        }

        // Расчет
        const result2 = calculateLoan(amount2, months2, annualRate2);

        // Отображение результатов
        monthlyPaymentSpan.textContent = formatCurrency(result.monthlyPayment);
        totalPaymentSpan.textContent = formatCurrency(result.totalPayment);
        overpaymentSpan.textContent = formatCurrency(result.overpayment);

        // Показываем блок с результатами
        resultsDiv.classList.add('show');
    });

    // Рассчитываем сразу при загрузке страницы
    calculateBtn.click();
});