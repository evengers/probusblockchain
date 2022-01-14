//see https://www.smashingmagazine.com/2020/02/cryptocurrency-blockchain-node-js/

const SHA256 = require("crypto-js/sha256");
class CryptoBlock {
  constructor(index, timestamp, data, precedingHash = " ") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  computeHash() {
    return SHA256(
      this.index +
        this.precedingHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  proofOfWork(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}





let genesisSeq = 0;
let genesisTimeStamp = "01/01/2020";
let genesisDesc = "Initial Block in the Chain";
let genesisNum = "0";



class CryptoBlockchain {


  constructor() {
    this.blockchain = [this.startGenesisBlock()];
    this.difficulty = 4;
  }
  
  startGenesisBlock() {
    //return new CryptoBlock(0, "01/01/2020", "Initial Block in the Chain", "0");
    return new CryptoBlock(genesisSeq, genesisTimeStamp, genesisDesc, genesisNum);
  }

   

  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }
  addNewBlock(newBlock) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    //newBlock.hash = newBlock.computeHash();
    newBlock.proofOfWork(this.difficulty);
    this.blockchain.push(newBlock);
  }

  checkChainValidity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const precedingBlock = this.blockchain[i - 1];

      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }
      if (currentBlock.precedingHash !== precedingBlock.hash) return false;
    }
    return true;
  }
}

let smashingCoin = new CryptoBlockchain();

console.log("smashingCoin mining in progress....");

/* replaced by file
smashingCoin.addNewBlock(
  new CryptoBlock(1, "01/06/2020", {
    sender: "Iris Ljesnjanin",
    recipient: "Cosima Mielke",
    quantity: 50
  })
);

smashingCoin.addNewBlock(
  new CryptoBlock(2, "01/07/2020", {
    sender: "Vitaly Friedman",
    recipient: "Ricardo Gimenes",
    quantity: 100
  })
);
*/


//SR read blockchain from external file
/*
    "sequence": 6,
    "datestamp": "01/06/2020",
    "sender": "Betty",
    "recipient": "Steve",
    "quantity": 100

*/
const fs = require('fs')

try {
  const fileContents = fs.readFileSync('blocks.dat', 'utf8')
  const data = JSON.parse(fileContents)
  data.forEach((blockIn) => {
          if (blockIn.sequence == 0) {
             smashingCoin.addNewBlock( new CryptoBlock(0, blockIn.datestamp, "Initial Block in the Chain", "0"));
             console.log("GENESIS FOUND")
             }else{
          
          //  console.log("sequence is:", blockIn.sequence);
           smashingCoin.addNewBlock(
           new CryptoBlock(blockIn.sequence, blockIn.datestamp, {
               sender: blockIn.sender,
               recipient: blockIn.recipient,
               quantity: blockIn.quantity
             })
             );
             
             }//end if else
             
        // console.log(blockIn);
     });
} catch (err) {
  console.error(err)
}


console.log(JSON.stringify(smashingCoin, null, 4));
