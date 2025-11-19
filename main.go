package main

import (
	"fmt"

	"buf.build/go/protovalidate"
	"github.com/haines/protovalidate-es-vs-go/gen/proto/example"
)

func main() {
	fmt.Println(protovalidate.Validate(&example.Message{}))
}
