# grpc-test 
Esempio di soluzione basata su gRPC con server Node.js (compilato), client Node.js (riga di comando) e client JS browser (basato su grpc-web).  
[Maggiori informazioni su gRPC static codegen per Node.js](https://github.com/grpc/grpc/tree/master/examples/node/static_codegen)

## Software richiesti
- [Node.js](https://nodejs.org/) con npm  
- [grpcwebproxy](https://github.com/improbable-eng/grpc-web/tree/master/go/grpcwebproxy)  
- [protoc](https://github.com/protocolbuffers/protobuf)

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
