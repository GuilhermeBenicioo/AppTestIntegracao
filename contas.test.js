const contas = require('./contas.js');

test("Soma 2 + 5 esperado 7 como resultado ", () => {
    expect(contas.soma(2, 5)).toBe(7)
})