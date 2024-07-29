import geraSenha from './geradores';

const resultado = document.querySelector('.resultado');
const qtd = document.querySelector('.qtd');
const maiusculas = document.querySelector('.maiusculas');
const minusculas = document.querySelector('.minusculas');
const numeros = document.querySelector('.numeros');
const simbolos = document.querySelector('.simbolos');
const gerar = document.querySelector('.gerar');

export default () => {
    gerar.addEventListener('click', () => {
        resultado.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        qtd.value,
        maiusculas.checked,
        minusculas.checked,
        numeros.checked,
        simbolos.checked,
    );
    return senha || 'Preencha os requisitos!';
}