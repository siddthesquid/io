import { flow, pipe, X } from "#"

const main = async () => {
  const program = flow(
    //
    X.declare<number>(),
    X.tap((_) => console.log(_)),
    X.debugWith("BLAG: "),
    (_) => _.toString(),
  )
  program(10)
}

type A = {
  _tag: "A"
  value: number
}

type B = {
  _tag: "B"
  value: string
}

type AOrB = A | B

const someFunc = <T extends AOrB>(value: T): T => {
  switch (value._tag) {
    case "A":
      return {
        ...value,
        value: value.value + 1,
      }
    case "B":
      return {
        ...value,
        value: `${value.value}1`,
      }
    default:
      throw new Error("Not implemented")
  }
}

const x = someFunc({ _tag: "A", value: 10 })

main()
