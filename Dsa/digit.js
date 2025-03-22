function fun(arr) {
    let a = []
    
    for (let val of arr) {
        let n = val
        while (n > 0) {
            let lastDigit = n % 10
            if (lastDigit === 0) {
                a.push(lastDigit)   // Push 0 at the end
            } else {
                a.unshift(lastDigit) // Add other digits at the beginning
            }
            n = Math.floor(n / 10)
        }
    }
    
    return a.join('')
}

let nums = [3, 30, 34, 5, 9]
console.log(fun(nums))
