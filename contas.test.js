const contas = require('./contas.js');

test("Soma 2 + 5 esperado 7 como resultado ", () => {
    expect(contas.soma(2, 5)).toBe(7)
})

test("Subtração 5 - 2 esperado 3 como resultado ", () => {
    expect(contas.subtracao(5, 2)).toBe(3)
})

test("Multiplicação 2 * 2  esperado 4 como resultado ", () => {
    expect(contas.multiplicacao(2, 2)).toBe(4)
})

test("Divisão 10 / 2 esperado 5 como resultado ", () => {
    expect(contas.divisao(10, 2)).toBe(5)
})

