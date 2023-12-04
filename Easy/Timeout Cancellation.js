const cancellable = function(fn, args, t) {
    const cancelFn = function (){
        clearTimeout(timer);
    };
    const timer = setTimeout(()=>{
        fn(...args)
    }, t);
    return cancelFn;
};