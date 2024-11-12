package greeting

import( 
  "fmt"
  "rsc.io/quote"
)

// must be capitalized to be exported
func Greeting() {
  fmt.Println(quote.Go())
}

// fun using go run .
