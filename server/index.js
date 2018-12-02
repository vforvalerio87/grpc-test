const grpc = require("grpc")

const messages = require("./../proto/build/js/greeter_pb.js")
const services = require("./../proto/build/js/greeter_grpc_pb.js")

function sayHello(call, callback) {
  const reply = new messages.HelloReply()
  reply.setMessage("Hello " + call.request.getName())
  callback(null, reply)
}

function main() {
  const server = new grpc.Server()
  server.addService(services.GreeterService, { "sayHello": sayHello })
  server.bind("0.0.0.0:9000", grpc.ServerCredentials.createInsecure())
  server.start()
}

main()
