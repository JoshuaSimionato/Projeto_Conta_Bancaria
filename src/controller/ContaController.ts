import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";


export class ContaController implements ContaRepository {

    //Coleção de Array que vai armezenar os Objetos Conta
    private listaContas: Array<Conta> = new Array<Conta>();

    // Crontrolar os números das Contas
    numero: number = 0;


    procutarPorTitular(titular: string): void {
        let titularLowerCase = titular.toLowerCase(); // Converter o nome digitado para minúsculas
        let buscaPorTitular = this.listaContas.filter(c => c.titular.toLowerCase().includes(titularLowerCase)); // Converter o nome armazenado para minúsculas
        
        if (buscaPorTitular.length > 0) {
            buscaPorTitular.forEach(conta => conta.visualizar());
        } else {
            console.log(`Nenhuma conta encontrada para o titular: ${titular}`);
        }
    }

    

    listarTodas(): void {
        for (let conta of this.listaContas) {  // Percorre o array
            conta.visualizar();
        }

    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nA Conta número: " + conta.numero +
            " foi criada com sucesso!", colors.reset);
    }

    deletar(numero: number): void {
        let buscaConta = this.buscaNoArray(numero);

        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(`\nA conta numero: ${numero} foi apagada com sucesso !`);
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + numero
                + " não foi encontrada!", colors.reset);
    }

    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscaNoArray(numero);

        if (buscaConta !== null) {
            if (buscaConta.sacar(valor) === true)
                console.log('\nO saque foi efeutuado com sucesso!');
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + numero
                + " não foi encontrada!", colors.reset);
    }

    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscaNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.depositar(valor)
            console.log('\nO saque foi efeutuado com sucesso!');
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + numero
                + " não foi encontrada!", colors.reset);
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let buscaContaOrigem = this.buscaNoArray(numeroOrigem);
        let buscaContaDestino = this.buscaNoArray(numeroDestino);
        if (buscaContaDestino !== null && buscaContaOrigem !== null) {
            if (buscaContaOrigem.sacar(valor) === true) {
                buscaContaDestino.depositar(valor);
                console.log('\nO saque foi efeutuado com sucesso!');
            }
        } else
            console.log(colors.fg.red, "\nA Conta não foi encontrada!", colors.reset);
    }

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscaNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.visualizar()
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + numero
                + " não foi encontrada!", colors.reset);
    }

    atualizar(conta: Conta): void {
        let buscaProduto = this.buscaNoArray(conta.numero); //pega o valor do atributo número que está com conta

        if (buscaProduto != null) {
            this.listaContas[this.listaContas.indexOf(buscaProduto)] = conta;
            console.log(`\nA conta numero: ${conta.numero} foi atualizada`);

        } else
            console.log(`\n A conta numero: ${conta.numero} não foi encontrada!`);
    }

    //Métodos Auxiliares

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscaNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }

        return null;
    }
}