import { flow, pipe, X } from "#"

const main = async () => {
  const double = (x: number) => x * 2
  const asString = (x: number) => x.toString()
  const repeat = (x: string) => x.repeat(2)
  const parse = (x: string) => {
    const result = parseInt(x, 10)
    if (isNaN(result)) {
      throw new Error("NaN")
    }
    return result
  }
  const concat = (x: string) => (y: string) => x.concat(y)

  const program = flow(
    double,
    asString,
    repeat,
    repeat,
    parse,
    flow(double, double, double),
    asString,
    (s) => pipe(s, parse),
    X.tap((x) => console.log(x)),
    X.logWith("yoo: "),
    X.tap(double),
    (x) => x + 1,
    (x) => () => x,
    X.provide(2),
  )

  const result = program(2)

  console.log(result)
}

main()
