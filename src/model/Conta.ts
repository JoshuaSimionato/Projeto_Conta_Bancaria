export abstract class Conta{
    
// Definir os Atributos da Classe (Características)
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Construtor para inicializar os atributos
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}


	public get agencia(): number {
		return this._agencia;
	}

    
	public get titular(): string {
		return this._titular;
	}

	public get saldo(): number {
		return this._saldo;
	}

	public set numero(value: number) {
		this._numero = value;
	}

	public set agencia(value: number) {
		this._agencia = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}

	public set saldo(value: number) {
		this._saldo = value;
	}

    //metodos auxiliares
    public sacar(valor: number): boolean {

        if (this._saldo < valor) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }

        this._saldo = this._saldo - valor;
        return true;
    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    public visualizar (): void{
        let tipo: string = "";
        switch(this._tipo){
            case 1:
                tipo = "Conta Corrente";
                break
            case 2:
                tipo = "Conta Poupança";
                break
        }

        // Método para visualizar todos os dados do objeto
        console.log(`***********************************`);
        console.log(`Dados da Conta:`);
        console.log(`***********************************`);
        console.log(`Número da conta: ${this._numero}`);
        console.log(`Número da agência: ${this._agencia}`);
        console.log(`Tipo da conta: ${this._tipo}`);
        console.log(`Titular da conta: ${this._titular}`);
        console.log(`Saldo da conta: ${this._saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    }

}