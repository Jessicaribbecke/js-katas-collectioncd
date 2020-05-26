function add(x, y) {
    return x + y
}
console.log(add(1, 2))




function multiply(a, b) {
    let j = 0

    for (let i = 0; i < a; i += 1) {
        j = add(b, j)
    }
    return j

}
console.log(multiply(5, 3))






function power(x, n) {
    let p = 1

    for (let i = 0; i < n; i += 1) {
        p = multiply(x, p)

    }
    return p
}
console.log(power(2, 8))





function factorial(num) {
    let n = 1

    for (let i = num; i > 1; i -= 1) {
        n = multiply(i, n)
    }
    return n

}

console.log(factorial(4));



function fibonacci (n) {
    if (n < 2)
        return 1;
      
        let previous = 1;
        let current = 1;

        for(let i =2; i < n; i += 1) {
            let next = previous + current;

            previous = current;
            current = next;
        }
    }
      console.log(fibonacci(8))