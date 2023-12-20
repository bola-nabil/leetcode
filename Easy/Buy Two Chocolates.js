var buyChoco = function(prices, money) {
    let firstMinCost = Infinity;
    let secondMinCost = Infinity;

    for (let p of prices) {
        if (p < firstMinCost) {
            secondMinCost = firstMinCost;
            firstMinCost = p;
        } else {
            secondMinCost = Math.min(secondMinCost, p);
        }
    }

    let leftover = money - (firstMinCost + secondMinCost);

    return leftover >= 0 ? leftover : money;    
};