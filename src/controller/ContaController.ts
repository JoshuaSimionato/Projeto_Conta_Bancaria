import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";


export class ContaController implements ContaRepository {

    //Coleção de Array que vai armezenar os Objetos Conta
    private listaContas: Array<Conta> = new Array<Conta>();

    // Crontrolar os números das Contas
    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscaNoArray(numero);

        if(buscaConta !== null)
            buscaConta.visualizar()
        else
            console.log('A Conta não foi encontrada!')
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {  // Percorre o array
            conta.visualizar()
        }

    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A Conta foi cadastrada com sucesso!")
    }

    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }

    deletar(numero: number): void {
        throw new Error("Method not implemented.");
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