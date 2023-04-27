// Simple jest test file
import { makeThing } from "."

describe("makeThing", () => {
  it("should make a thing", () => {
    const thing = makeThing("hello world")
    expect(thing).toEqual({ a: "hello world" })
  })
})
