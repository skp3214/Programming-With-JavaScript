const num = [1, 2, 3, 4, 5, 6, 7]

const [] = num

const [first,second, ...ok] = num
console.log(ok)
console.log(second)

function sum(...args) {
    let soma = 0
    for (let i of args) {
        soma += i
    }
    return soma;
}
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4, 5))