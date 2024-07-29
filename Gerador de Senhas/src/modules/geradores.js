const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const simbolos = ',.;^~[]{}!@#$%&*()_></+=-';
const maiu = () => String.fromCharCode(rand(65, 91));
const minu = () => String.fromCharCode(rand(97, 123));
const numer = () => String.fromCharCode(rand(48, 58));
const simbo = () => simbolos[rand(0, simbolos.length)];

export default function senha(qtd, maius, minus, number, simbol) {
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++) {
        maius && senhaArray.push(maiu());
        minus && senhaArray.push(minu());
        number && senhaArray.push(numer());
        simbol && senhaArray.push(simbo());
    }
    return senhaArray.join('').slice(0, qtd);
}

