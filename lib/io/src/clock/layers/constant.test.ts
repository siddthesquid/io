import { pipe } from "@fp-ts/data/Function"
import { Effect } from "effect"
import Clock from ".."
import layer from "./constant"

const test_layer = (date: Date) => {
  test(date.toISOString(), () => {
    const actual = date.toISOString()
    const expected = pipe(
      Clock.now,
      Effect.provideLayer(layer(date)),
      Effect.unsafeRunSync,
    )
    expect(actual).toEqual(expected)
  })
}

describe("layers/constant", () => {
  test_layer(new Date(1638688737000))
  test_layer(new Date(1408688737000))
  test_layer(new Date(0))
})
