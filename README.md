# probusblockchain
Proof of concept for probus blockchain and cryptocurrency

a simple blockchain along with reference links to cryptocurrency and blockchain references


Done:

1) simple example blockchain created with crypto blocks, hashing, proof of work
see:  https://www.smashingmagazine.com/2020/02/cryptocurrency-blockchain-node-js/

2) published to GitHub  ... related aggregator here: https://probuschain.web.app/#/

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

<<<<<<< HEAD
Good video summary: 
https://www.youtube.com/watch?v=bBC-nXj3Ng4
=======
list of blockchains: https://www.gartner.com/reviews/market/blockchain-platforms

>>>>>>> b876256e59647c1915cc84f0f71c498da7452401


One of the over 11,000 cryptos ... https://tezos.com/


Why there is such a thing as "blockchain as a service"

https://hackernoon.com/a-no-bs-guide-to-the-blockchain-as-a-service-space-part-i-be07c97b54c0


https://www.kaleido.io/blockchain-blog/why-blockchain-as-a-service



the problem with mining:
https://www.theguardian.com/technology/2022/jan/16/panic-as-kosovo-pulls-the-plug-on-its-energy-guzzling-bitcoin-miners

democracy?

https://www.theguardian.com/commentisfree/2022/jan/15/will-blockchain-fulfil-its-democratic-promise-or-will-it-become-a-tool-of-big-tech



Stablecoins:

https://quantoz.com/solutions/stablecoins/



 
https://bitcoin.stackexchange.com/questions/98788/how-is-data-in-a-blockchain-stored-structure-of-block-and-blockchain

" If designing your own blockchain, you obviously have a lot of leeway as to what goes into the data blocks, 
how they are stored and distributed, etc. The choice of networking and storage protocols are not what make it a blockchain.

So, back to your original question: what is a block? It's just a chunk of data.

How is it stored? However you like, but for Bitcoin, they are just chunks of data disseminated via a P2P network of nodes, 
and many nodes will store those chunks in a database on disk. 
In fact, there are several bitcoin implementations which store them in different ways! 
But they can all agree on what's valid, because of the blockchain. "
  

Tech notes:

Alternative peer-to-peer

https://piyushgarg.hashnode.dev/how-to-build-a-file-transfer-application-with-node-and-webrtc
 
https://stackoverflow.com/questions/33000811/downloading-torrent-with-node-js


https://awesomeopensource.com/project/webtorrent/webtorrent


https://javascript.plainenglish.io/building-a-signaling-server-for-simple-peer-f92d754edc85


https://peerjs.com/


https://github.com/aiham/webrtc-blockchain/tree/master/client/src


https://www.youtube.com/watch?v=8N_4Furztjo



Hyperledger development:

https://medium.com/coinmonks/start-developing-hyperledger-fabric-chaincode-in-node-js-e63b655d98db



https://diligentdev.medium.com/quasar-writing-a-web-and-mobile-cryptocurrency-app-with-the-same-codebase-ba708bc8d375



