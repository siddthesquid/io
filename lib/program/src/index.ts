import { flow, pipe } from "fp-ts/lib/function"
import { Program } from "./program"

export { pipe, flow, Program }

interface PromiseLike2<T> {
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null,
  ): PromiseLike2<TResult1 | TResult2>
}

const main = async () => {}

main()

const controller = new AbortController()
const { signal } = controller

const interval = setInterval(() => {
  console.log("hihihihi")
}, 1000)

signal.addEventListener("abort", () => {
  clearInterval(interval)
})

setTimeout(() => {
  controller.abort()
}, 5000)

// create stream
const stream = new ReadableStream<number>({
  start(controller) {
    controller.enqueue(10)
    controller.close()
  },
})

const s = setImmediate(() => {
  throw new Error("yo")
})

// s.ref()._onImmediate = () => {
//   console.log("yi")
// }

process.on("uncaughtException", (err) => {
  console.log("uncaughtException", err)
})

const myIterable = {
  *[Symbol.iterator]() {
    yield 1
    yield "yp"
    yield 3
    yield 31
    yield 32
    yield 33
    yield 34
    yield 35
    yield 36
    yield 37
    yield 38
  },
}

const a = myIterable[Symbol.iterator]().next().value
