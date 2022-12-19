import { pipe } from "@fp-ts/data/Function"
import { Effect } from "effect"
import Clock from ".."
import layer from "./generated"

const test_layer = (date: Date, next: (date: Date) => Date) => {
  test(date.toISOString(), async () => {
    await pipe(
      Effect.gen(function* ($) {
        const actual = date
        const expected = [
          yield* $(Clock.now),
          yield* $(Clock.now),
          yield* $(Clock.now),
        ]
        expect(actual).toEqual(expected[0])
        expect(next(actual)).toEqual(expected[1])
        expect(next(next(actual))).toEqual(expected[2])
      }),
      Effect.provideLayer(layer(date, next)),
      Effect.unsafeRunPromise,
    )
  })
}

describe("layers/generated", () => {
  test_layer(new Date(1638688737000), (date) => new Date(date.getTime() + 1))
  test_layer(new Date(1408688737000), (date) => new Date(date.getTime() + 1))
  test_layer(new Date(0), (date) => new Date(date.getTime() + 1))
})
