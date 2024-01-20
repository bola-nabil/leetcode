var countSymmetricIntegers = function (low, high) {
        let count = 0;

        for (let number = low; number <= high; number++) {
            let strNumber = String(number)
            let length = strNumber.length

            if (length % 2 === 0) {
                let leftHalf = strNumber.slice(0, length / 2)
                let rightHalf = strNumber.slice(length / 2)

                let leftHalfDigitSum = leftHalf
                .split('')
                .reduce((sum, digit) => sum + Number(digit), 0)
                let rightHalfDigitSum = rightHalf
                .split('')
                .reduce((sum, digit) => sum + Number(digit), 0)

                if (leftHalfDigitSum === rightHalfDigitSum)
                    count++
            }
        }

        return count;
};