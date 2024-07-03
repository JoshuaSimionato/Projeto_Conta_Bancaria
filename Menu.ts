import * as readlinesync from "readline-sync"
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";

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


    while (true) {

        console.log(colors.bg.black, colors.fg.blue,"-=".repeat(30))
        console.log("                                                         ");
        console.log("                                                         ");
        console.log("                    Banco Generation                     ");
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
                console.log(colors.fg.bluestrong, 
                    "\n\nSair\n\n", colors.reset);
                break;
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