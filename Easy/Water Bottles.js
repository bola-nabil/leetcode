var numWaterBottles = function(numBottles, numExchange, exchange) {
    exchange = exchange || 0;
    if (numBottles + exchange < numExchange) return numBottles;
    return numBottles + numWaterBottles(Math.floor((numBottles + exchange) / numExchange), numExchange, (numBottles+exchange)%numExchange);
};