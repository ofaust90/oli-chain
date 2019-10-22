const ChainUtil = require('../chain-util');
const Transaction = require('./transaction');
const { INITIAL_BALANCE } = require('../config');

class Wallet {
    constructor(){
        this.balance = INITIAL_BALANCE;
        this.keyPair = ChainUtil.genKeyPair();
        this.publicKey = this.keyPair.getPublic().encode('hex');
        
    }

    toString() {
        return `Wallet -
            publicKey: ${this.publicKey.toString()}
            balance  : ${this.ballance}`
    }

    sign(datahash){
        return this.keyPair.sign(datahash);
    }

    createTransaction(recipient, amount, transactionPool) {
      //  this.balance = this.calculateBalance(blockchain);
    
        if (amount > this.balance) {
          console.log(`Amount: ${amount} exceceds current balance: ${this.balance}`);
          return;
        }
    
        let transaction = transactionPool.existingTransaction(this.publicKey);
    
        if (transaction) {
          transaction.update(this, recipient, amount);
        } else {
          transaction = Transaction.newTransaction(this, recipient, amount);
          transactionPool.updateOrAddTransaction(transaction);
        }
    
        return transaction;
      }


    
}

module.exports = Wallet;