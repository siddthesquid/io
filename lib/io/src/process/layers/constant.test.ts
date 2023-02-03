import { pipe } from "@fp-ts/data/Function"
import { Effect } from "effect"
import Clock from ".."
import layer from "./constant"

const test_layer = (date: Date) => {
  test(date.toISOString(), async () => {
    await pipe(
      Effect.gen(function* ($) {
        const actual = date
        const expected = yield* $(Clock.now)
        expect(actual).toEqual(expected)
      }),
      Effect.provideLayer(layer(date)),
      Effect.unsafeRunPromise,
    )
  })
}

describe("layers/constant", () => {
  test_layer(new Date(1638688737000))
  test_layer(new Date(1408688737000))
  test_layer(new Date(0))
})
