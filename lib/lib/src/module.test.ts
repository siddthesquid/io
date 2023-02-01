import { anotherFunction } from "./module"

describe("module", () => {
  it("should call another function", () => {
    const spy = jest.spyOn(console, "log")
    anotherFunction()
    expect(spy).not.toHaveBeenCalledWith("Hello from another function")
  })
})
