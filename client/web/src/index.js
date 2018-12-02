import { grpc } from "grpc-web-client"

import { Greeter } from "./../../../proto/build/web/greeter_pb_service.js"
import { HelloRequest } from "./../../../proto/build/web/greeter_pb.js"

const host = "http://localhost:8080"

const request = new HelloRequest()
request.setName("Valce")

const root = document.body.appendChild(document.createElement("div"))

grpc.invoke(
  Greeter.SayHello,
  {
    request,
    host,
    "onMessage": message => {
      root.innerHTML = message
    },
    "onEnd": (code, msg, trailers) => {
      if (code !== grpc.Code.OK) { root.innerHTML = `Hit an error. Code: ${code}. Message: ${msg}. Trailers: ${JSON.stringify(trailers)}` }
    }
  }
)
