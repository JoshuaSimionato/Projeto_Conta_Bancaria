import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";


export class ContaController implements ContaRepository {

    //Coleção de Array que vai armezenar os Objetos Conta
    private listaContas: Array<Conta> = new Array<Conta>();

    // Crontrolar os números das Contas
    numero: number = 0;

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

        if(buscaConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log('\nA conta foi excluida!');
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + numero
                + " não foi encontrada!", colors.reset);
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscaNoArray(numero);

        if(buscaConta !== null){
            buscaConta.visualizar()
        }else
            console.log(colors.fg.red, "\nA Conta numero: " + numero
                + " não foi encontrada!", colors.reset);
    }

    atualizar(conta: Conta): void {
        let buscaProduto = this.buscaNoArray(conta.numero); //pega o valor do atributo número que está com conta

        if (buscaProduto != null) {
            this.listaContas[this.listaContas.indexOf(buscaProduto)] = conta;
            console.log(`\nA conta foi atualizada!`);
            
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