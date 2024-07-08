import * as readlinesync from "readline-sync"
import { colors } from './src/util/Colors';
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
    let menu, numero, agencia, tipo, saldo, limite, aniversario: number; //Guarda as informações que usuário digitou
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupança']; // 
    const contas: ContaController = new ContaController();


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

        console.log(colors.bg.black, colors.fg.blue, "-=".repeat(30))
        console.log("                                                         ");
        console.log("                                                         ");
        console.log("                        Banco JS                         ");
        console.log("                                                         ");
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

                console.log('Digite o Número da Agência: ');
                agencia = readlinesync.questionInt("");

                console.log('Digite o Nome do titular da Conta: ');
                titular = readlinesync.question("");

                console.log('Digite o Tipo da Conta: ');
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log('Digite o Saldo da Conta: ');
                saldo = readlinesync.questionFloat("");


                switch (tipo) {
                    case 1:
                        console.log('Digite o Límite da Conta ');
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite) // Adiciona dentro do Array
                        )
                        break;
                    case 2:
                        console.log('Digite a Data de Aniversário da Conta: ')
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }
                keyPress();
                break;
            case 2:
                console.log(colors.fg.bluestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);
                contas.listarTodas();
                keyPress()
                break;
            case 3:
                console.log(colors.fg.bluestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                    console.log("Digite o número da Conta: ")
                    numero = readlinesync.questionInt("");

                    contas.procurarPorNumero(numero)

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


export function sobre(): void {
    console.log("-=".repeat(30));
    console.log("\nProjeto desenvolvido por: Joshua Aguilar Simionato\n")
    console.log("\nEmail: joshua.simionato@gmail.com\n")
    console.log("\nGitHub: https://github.com/JoshuaSimionato\n\n")
    console.log("-=".repeat(30));
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main(); //Função Principal