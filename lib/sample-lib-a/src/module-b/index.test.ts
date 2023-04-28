// Simple jest test file
import { BLAH, thing } from "."

describe("makeThing", () => {
  it("should make a thing", () => {
    expect(thing).not.toEqual(20)
    expect(BLAH).toEqual(undefined)
  })
})
