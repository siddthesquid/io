import { pipe } from "@fp-ts/data/Function"
import { Effect } from "effect"
import Clock from ".."
import operation from "./now"

const test_operation = (date: Date) => {
  test(date.toISOString(), () => {
    const actual = date
    const expected = pipe(
      operation,
      Effect.provideLayer(Clock.layers.constant(date)),
      Effect.unsafeRunSync,
    )
    expect(actual).toEqual(expected)
  })
}

describe("api/now", () => {
  test_operation(new Date(1638688737000))
  test_operation(new Date(1408688737000))
  test_operation(new Date(0))
})
