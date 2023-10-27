var defangIPaddr = function(address) {
        let result = address.replaceAll(".", "[.]");
        return result;
};