class Conta
{
    titular;
    saldo;
    taxa = 0.5;
    
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
        console.log('Vc criou uma conta para:' + titular);
    }
   
    deposito(valor) {
         this.saldo += valor; 
    }

    sacar(valor) {
        this.saldo -= valor; 
   }

}