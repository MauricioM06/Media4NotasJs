let Nota1 = parseFloat(promete("Primeira nota: ") || 0);
let Nota2 = parseFloat(promete("Segunda nota: ") || 0);
let Nota3 = parseFloat(promete("Terceira nota: ") || 0);
let Nota4 = parseFloat(promete("Quarta nota: ") || 0);

if (Nota1 < 0 || Nota2 < 0 || Nota3 < 0 || Nota4 < 0 ||
    Nota1 > 10 || Nota2 > 10 || Nota3 > 10 || Nota4 > 10) 
{
    alert("Por Favor, digite somente notas entre 0 e 10.");
} else {
    const Media = (Nota1 + Nota2 + Nota3 + Nota4) / 4;

    let resultado;
    if (Media < 5) {
        Resultado = "Reprovado.";
    } else if (Media > 6) {
        Resultado = "Aprovado.";
    } else {
        Resultado = "Em recuperação.";
    }
        const Mensagem = `Sua média foi de ${Media.toFixed(1)}. Situação: ${Resultado}`;
        alert(Mensagem);
}
