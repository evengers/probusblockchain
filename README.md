# probusblockchain
Proof of concept for probus blockchain and cryptocurrency

a simple blockchain along with reference links to cryptocurrency and blockchain references


Done:

1) simple example blockchain created with crypto blocks, hashing, proof of work
see:  https://www.smashingmagazine.com/2020/02/cryptocurrency-blockchain-node-js/

2) published to GitHub

3) input data from external file instead of hard-code example (will need to change see below)


To-Do:

- external file storage for computed blockchain (for views on storage see: https://bitcoin.stackexchange.com/questions/98788/how-is-data-in-a-blockchain-stored-structure-of-block-and-blockchain)
 will start with single file.
 
- add ledger-style .xls to .json ?? for ease of ledger use 

- add permissions

- add peer-to-peer compute with multi-node (i.e., multiple computers)
      - replication of data to peers  (commonly now called "distributed" in blockchain discussions)
      - communication of results

- add authentication / public & private key generation



Notes:

Great glossary: https://www.gemini.com/learn/glossary

Excellent summary:  https://blockgeeks.com/guides/what-is-blockchain-technology/

Very good developing blockchains overview: https://enappd.com/blog/how-to-develop-a-blockchain-application/4/


One of the over 11,000 cryptos ... https://tezos.com/



 
https://bitcoin.stackexchange.com/questions/98788/how-is-data-in-a-blockchain-stored-structure-of-block-and-blockchain

" If designing your own blockchain, you obviously have a lot of leeway as to what goes into the data blocks, 
how they are stored and distributed, etc. The choice of networking and storage protocols are not what make it a blockchain.

So, back to your original question: what is a block? It's just a chunk of data.

How is it stored? However you like, but for Bitcoin, they are just chunks of data disseminated via a P2P network of nodes, 
and many nodes will store those chunks in a database on disk. 
In fact, there are several bitcoin implementations which store them in different ways! 
But they can all agree on what's valid, because of the blockchain. "
  


 

