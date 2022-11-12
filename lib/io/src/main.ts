import * as T from "@effect/core/io/Effect"
import { pipe } from "@tsplus/stdlib/data/Function"
import { Console, layers } from "./console"

const program = T.gen(function* ($) {
  yield* $(Console.log("hello, world"))
  yield* $(Console.error("goodbye, world"))
})

const fin = pipe(program, T.provideSomeLayer(layers.live))

T.unsafeRunPromise(fin)
