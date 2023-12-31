Function.prototype.callPolyfill = function(context, ...args) {
    const fn = this;
    Object.prototype.func = fn;
    return context.func(...args);
};
