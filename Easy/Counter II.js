var createCounter = function(init) {
    c = i = init

    function increment() {
        return ++c
    }

    function decrement() {
        return --c
    }

    function reset() {
        return c = i
    }
    return {increment, decrement, reset}
};