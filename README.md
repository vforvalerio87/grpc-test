# grpc-test 
Esempio di soluzione basata su gRPC con server Node.js (compilato), client Node.js (riga di comando) e client JS browser (basato su grpc-web).  

## Software richiesti
- [Node.js]() con npm
- [grpcwebproxy]()  
- [protoc]()  
- [grpc_tools_node_protoc]()

## Istruzioni
- Installa i software richiesti  
- Installa le dipendenze con `npm install`  
- `npm run start-server` per avviare il server gRPC  
- `npm run start-proxy` per avviare il proxy gRPC-web (necessario per ricevere chiamate gRPC da browser)  
- `npm run start-web-client` per avviare il client web  

Se modificate le definizioni di protobuf, è necessario ricompilare client e server per Node.js e client gRPC-web per il browser.  
- `npm run compile-js` per compilare server e client Node.js  
- `npm run compile-web` per compilare il client web

## Comandi
- `npm run call` per chiamare il server gRPC da client Node.js da command line
