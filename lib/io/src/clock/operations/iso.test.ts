import { pipe } from "@fp-ts/data/Function"
import { Effect } from "effect"
import Clock from ".."
import operation from "./iso"

const test_operation = (date: Date) => {
  test(date.toISOString(), async () => {
    await pipe(
      Effect.gen(function* ($) {
        const actual = date.toISOString()
        const expected = yield* $(operation)
        expect(actual).toEqual(expected)
      }),
      Effect.provideLayer(Clock.layers.constant(date)),
      Effect.unsafeRunPromise,
    )
  })
}

describe("operations/iso", () => {
  test_operation(new Date(1638688737000))
  test_operation(new Date(1408688737000))
  test_operation(new Date(0))
})
