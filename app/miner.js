class Miner {
    constructor(blockchain, transactionPool, wallet,p2pServer){
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.p2pServer = p2pServer;
    }

    mine(){
        const validTransactions = this.transactionPool.validTransactions();
        //include a reward for the miner

        //create a block consiting the valid transactions

        //synchronize chains in the peer-to-peer server

        //clea the transactionpool

        //broadcast to every miner to clear their transacton pools

    }

}