import { BLAH, thing2 } from "."

describe("makeThing", () => {
  it("should make a thing", () => {
    expect(thing2).not.toEqual(20)
    expect(BLAH).toEqual(undefined)
  })
})
