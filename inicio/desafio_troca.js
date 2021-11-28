// Trocar o valor de a pelo valor de b.
// depois da troca... a = 94 e b = 7
{
    let a = 7;
    let b = 94;

    let x = b;
    let y = a;

    console.log("O Valor de a é: " + x);
    console.log("O Valor de b é: " + y);
    // Feito por mim, porém eu não troco os valores das variáveis.
}

{
    let a = 7;
    let b = 94;

    let temp = a;
    a = b;
    b = temp;

    console.log("O Valor de a é: " + a);
    console.log("O Valor de b é: " + b);
    // Feito pelo professor.
}

{
    let a = 7;
    let b = 94;

    [a,b] = [b,a]

    console.log("O Valor de a é: " + a);
    console.log("O Valor de b é: " + b);
}
    // Metodo que eu pesquisei na internet para aprender.