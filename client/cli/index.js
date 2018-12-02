const grpc = require("grpc")

const messages = require("./../../proto/build/js/greeter_pb.js")
const services = require("./../../proto/build/js/greeter_grpc_pb.js")

function main() {
  const client = new services.GreeterClient(
    "localhost:9000",
    grpc.credentials.createInsecure()
  )

  const request = new messages.HelloRequest()
  let user = "World!"
  if (process.argv.length >= 3) { user = process.argv[2] }

  request.setName(user)
  client.sayHello(request, function(err, response) {
    console.log("Greeting:", response.getMessage())
  })
}

main()
