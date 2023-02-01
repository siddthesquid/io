function* countTo(n: number): Generator<number, void, string> {
  let i = 0
  while (i < n) {
    const a = yield i
    i += 1

    console.log(a)
  }
}

const iterator = countTo(10)

let input = "a"
let current = iterator.next(input)
console.log(`first: ${current.toString()}`)

while (!current.done) {
  console.log(current)

  input += "a"
  current = iterator.next(input)
}
