import * as readlinesync from "readline-sync"
import { colors } from './src/util/Colors';

export function main() {
    let menu: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.blue, "-=".repeat(30))
        console.log("                                                         ");
        console.log("                    Banco Generation                     ");
        console.log("                                                         ");
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
                keyPress()
                break;
            case 2:
                console.log(colors.fg.bluestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);
                keyPress()
                break;
            case 3:
                console.log(colors.fg.bluestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                keyPress()
                break;
            case 4:
                console.log(colors.fg.bluestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);
                keyPress()
                break;
            case 5:
                console.log(colors.fg.bluestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);
                keyPress()
                break;
            case 6:
                console.log(colors.fg.bluestrong, 
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.bluestrong, 
                    "\n\nDepósito\n\n", colors.reset);
                keyPress()
                break;
            case 8:
                console.log(colors.fg.bluestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);
                keyPress()
                break;
            case 9:
                console.log(colors.fg.bluestrong, 
                    "\n\nSair\n\n", colors.reset);
                keyPress()
                break;
            default:
                console.log(colors.fg.bluestrong, 
                    "\nOpção Inválida!\n", colors.reset);
                keyPress()
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

function keyPress(): void {
    console.log(colors.reset, "\n");
    console.log("\nPressione enter para continuar...\n");
    readlinesync.prompt();
}

main(); //Função Principal
