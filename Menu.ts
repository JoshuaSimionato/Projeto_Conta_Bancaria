import * as readlinesync from "readline-sync"
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta'
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
    var menu, numero, agencia, tipo, saldo, limite, aniversario: number; //Guarda as informações que usuário digitou
    let titular: string;

    const tipoContas = ['Conta Corrente', 'Conta Poupanca']; // 
    const contas: ContaController = new ContaController();


    // Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Joshua Simionato', 1000000.00, 100000));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'Vitoria Simionato', 1000.00, 100));

    // Novas Instâncias da Classe Poupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, 'Camila Ribeiro', 2523443.00, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 3214, 2, 'Camila Ribeiro', 2523443.00, 10));


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
                    "\nCriar Conta\n", colors.reset);

                console.log('Digite o Número da Agência: ');
                agencia = readlinesync.questionInt("");

                console.log('\nDigite o Nome do titular da Conta: ');
                titular = readlinesync.question("");

                console.log('\nDigite o Tipo da Conta: ');
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log('\nDigite o Saldo da Conta (R$): ');
                saldo = readlinesync.questionFloat("");


                switch (tipo) {
                    case 1:
                        console.log('\nDigite o Límite da Conta ');
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite) // Adiciona dentro do Array
                        )
                        break;

                    case 2:
                        console.log('\nDigite a Data de Aniversário da Conta: ')
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
                    "\nListar todas as Contas\n", colors.reset);
                contas.listarTodas();
                keyPress()
                break;

            case 3:
                console.log(colors.fg.bluestrong,
                    "\nConsultar dados da Conta - por número\n", colors.reset);
                console.log("Digite o número da Conta: ")
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero)
                keyPress()
                break;

            case 4:
                console.log(colors.fg.bluestrong,
                    "\nAtualizar dados da Conta\n", colors.reset);
                console.log("\nDigite o número da Conta: ");
                numero = readlinesync.questionInt("");
                let conta = contas.buscaNoArray(numero);

                if (conta) { //Mesma coisa que !==

                    console.log('Digite o Número da Agência: ');
                    agencia = readlinesync.questionInt("");

                    console.log('\nDigite o Nome do titular da Conta: ');
                    titular = readlinesync.question("");

                    console.log('\nDigite o Saldo da Conta: ');
                    saldo = readlinesync.questionFloat("");

                    tipo = conta.tipo; //Identifica o número da conta

                    switch (tipo) {
                        case 1:
                            console.log('\nDigite o Límite da Conta ');
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite) // Adiciona dentro do Array
                            )
                            break;

                        case 2:
                            console.log('\nDigite a Data de Aniversário da Conta: ')
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )
                            break;
                    }
                } else {
                    console.log(colors.fg.red, `\n A conta numero: ${numero} não foi encontrada!`, colors.reset);
                }
                keyPress()
                break;

            case 5:
                console.log(colors.fg.bluestrong,
                    "\nApagar uma Conta\n", colors.reset);
                console.log("\nDigite o número da Conta: ");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);
                keyPress()
                break;

            case 6:
                console.log(colors.fg.bluestrong,
                    "\nSaque\n", colors.reset);
                keyPress()
                break;

            case 7:
                console.log(colors.fg.bluestrong,
                    "\nDepósito\n", colors.reset);
                keyPress()
                break;

            case 8:
                console.log(colors.fg.bluestrong,
                    "\nTransferência entre Contas\n", colors.reset);
                keyPress()
                break;

            case 9:
                console.log("-=".repeat(30));
                console.log(colors.fg.bluestrong,
                    "\nBanco JS te deseja um excelente dia !\n", colors.reset);
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