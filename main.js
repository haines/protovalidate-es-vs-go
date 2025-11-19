import { create } from "@bufbuild/protobuf";
import { createValidator } from "@bufbuild/protovalidate";
import { MessageSchema } from "./gen/proto/example/example_pb.js";

console.log("validation error:")

for (const violation of createValidator().validate(MessageSchema, create(MessageSchema)).violations) {
  console.log(`- ${violation}`);
}
