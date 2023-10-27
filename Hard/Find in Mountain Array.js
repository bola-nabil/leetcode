var findInMountainArray = function(target, mountainArr) {
    const n = mountainArr.length();
    let left = 0;
    let right = n - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    const peak = left;

    left = 0;
    right = peak;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = mountainArr.get(mid);
        if (midValue === target) {
            return mid;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    left = peak;
    right = n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = mountainArr.get(mid);
        if (midValue === target) {
            return mid;
        } else if (midValue < target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}