import * as readlinesync from "readline-sync"
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
    let menu: number;

    const c1: Conta = new Conta(1, 1234, 1, 'Joshua Simionato', 800000.00) //criei o objeto da classe conta
    const c2: Conta = new Conta(2, 3134, 1, 'Vitoria Simionato', 10000.00) //criei o objeto da classe conta

    c1.visualizar();
    console.log(`\nO Saldo da conta 01 é: ${c1.saldo}`);

    console.log(`\n\nVocê é da agência: ${c1.agencia}`);

    console.log(`\n\nO titular da conta se chama: ${c1.titular}\n`)

    // Visualizando o Saldo da Conta c2, depois de atualizar o valor
    console.log(`\nO Saldo da conta 02 é: ${c2.saldo}`);

    // Saque nas Contas
    console.log(`\nSacar 100.00 Reais da Conta C1: ${c1.sacar(100)}`); // true
    c1.visualizar();

    console.log(`\nSacar 1000000.00 Reais da Conta C2: ${c2.sacar(1000000)}`); // false
    c2.visualizar();

    // // Depósito nas Contas
    console.log(`\nDepositar 200000.00 Reais da Conta C1: `); 
    c1.depositar(200000)
    c1.visualizar();

    console.log(`\nDepositar 300000.25 Reais da Conta C2: `); 
    c2.depositar(300000.25)
    c2.visualizar();

    // Novas Instâncias da Classe ContaCorrente (Objetos)
    const cc1: ContaCorrente = new ContaCorrente(3, 1234, 1, 'Joshua Simionato', 1000000.00, 100000);
    const cc2: ContaCorrente = new ContaCorrente(4, 1234, 1, 'Vitoria Simionato', 1000.00, 100);

    cc1.visualizar();
    cc2.visualizar();

    console.log(`\nSaque de R$ 25.000,00 na CC1: ${cc1.sacar(2500)}`);
    cc1.visualizar();
    console.log(`\nSaque de R$ 1.500,00 na CC2: ${cc2.sacar(15000)}`);

    console.log(`\nDepositar de R$ 3.000,99 Reais da Conta CC2: `)
    cc2.depositar(3000.99)
    cc2.visualizar()


    const cc3: ContaPoupanca = new ContaPoupanca(1234, 1, 2, 'Camila Ribeiro', 2523443.00, 10)
    cc3.visualizar()

    console.log(`\nDia 10 é aniversário da Poupouça: ${cc3.aniversario}`)
    console.log(`\nO Valor do saque R$ 1.223,00 : ${cc3.sacar(1223)}`)
    cc3.visualizar()
    console.log(`\nO Valor do depositado R$ 2.223,00 : ${cc3.sacar(2223)}`)
    cc3.visualizar()


    while (true) {

        console.log(colors.bg.black, colors.fg.blue,"-=".repeat(30))
        console.log("                                                         ");
        console.log("                                                         ");
        console.log("                                                         ");
        console.log("                        Banco JS                         ");
        console.log("                                                         ");
        console.log("-=".repeat(30));
        console.log("               [1] - Criar Conta                         ");
        console.log("               [2] - Listar todas as contas              ");
        console.log("               [3] - Buscar Conta por Numero             ");
        console.log("               [4] - Atualizar Dados por Numero          ");
        console.log("               [5] - Apagar Conta                        ");
        console.log("               [6] - Sacar                               ");
        console.log("               [7] - Depositar                           ");
        console.log("               [8] - Transferir valores entre Contas     ");
        console.log("               [9] - Sair                                ");
        console.log("                                                         ");
        console.log("-=".repeat(30));
        console.log("                                                          ", 
            colors.reset);

        menu = readlinesync.questionInt("\nEntre com a opcao desejada: ");

        switch (menu) {
            case 1:
                console.log(colors.fg.bluestrong, 
                    "\n\nCriar Conta\n\n", colors.reset);
                break;
            case 2:
                console.log(colors.fg.bluestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);
                break;
            case 3:
                console.log(colors.fg.bluestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                break;
            case 4:
                console.log(colors.fg.bluestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);
                break;
            case 5:
                console.log(colors.fg.bluestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);
                break;
            case 6:
                console.log(colors.fg.bluestrong, 
                    "\n\nSaque\n\n", colors.reset);

                break;
            case 7:
                console.log(colors.fg.bluestrong, 
                    "\n\nDepósito\n\n", colors.reset);
                break;
            case 8:
                console.log(colors.fg.bluestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);
                break;
            case 9:
                console.log("-=".repeat(30));
                console.log(colors.fg.bluestrong, 
                    "\n\nBanco JS te deseja um excelente dia ! \n\n", colors.reset);
                sobre();
                process.exit(0); // Saída do programa 

            default:
                console.log(colors.fg.bluestrong, 
                    "\nOpção Inválida!\n", colors.reset);
                break;
        }
    }
}


export function sobre(): void{
    console.log("-=".repeat(30));
    console.log("\nProjeto desenvolvido por: Joshua Aguilar Simionato\n")
    console.log("\nEmail: joshua.simionato@gmail.com\n")
    console.log("\nGitHub: https://github.com/JoshuaSimionato\n\n")
    console.log("-=".repeat(30));
}



main(); //Função Principal