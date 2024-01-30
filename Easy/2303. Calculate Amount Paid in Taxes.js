const calculateTax = (brackets, income) => {
    let paid = 0;
    let prev = 0;
    
    for (const [amt, percent] of brackets) {
        const current = Math.min(income, amt - prev);
        const tax = current * (percent / 100);
        
        income -= current;
        paid += tax;
        prev = amt;
        
        if (income <= 0) return paid;
    }
};