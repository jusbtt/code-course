import ValidaCPF from  "./ValidaCPF";

export default class GeraCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }
    formato(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }
    novoCPF() {
        const semDigito = this.rand();
        const digito1 = ValidaCPF.geraDigito(semDigito);
        const digito2 = ValidaCPF.geraDigito(semDigito + digito1);
        const novoCpf = semDigito + digito1 + digito2;
        return this.formato(novoCpf);
    }
}
