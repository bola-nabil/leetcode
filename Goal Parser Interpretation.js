var interpret = function(command) {
    let result = command.replaceAll('()','o').replaceAll('(al)','al');
    return result;
};