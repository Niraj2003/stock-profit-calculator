document.getElementById('profitForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let pricesInput = document.getElementById('prices').value;
    let pricesArray = pricesInput.split(',').map(Number);

    if (pricesArray.some(isNaN)) {
        document.getElementById('result').innerText = 'Please enter valid numbers separated by commas.';
        document.getElementById('result').style.color = 'red';
        return;
    }

    let maxProfit = calculateMaxProfit(pricesArray);

    document.getElementById('result').innerText = 'Maximum Profit: ' + maxProfit;
    document.getElementById('result').style.color = 'green';
});

function calculateMaxProfit(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }

    return maxProfit;
}