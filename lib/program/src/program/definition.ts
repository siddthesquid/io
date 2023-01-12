const e = new Error("message")

const testAnyError = (error: any) {
  if (error instanceof Error) {
    error.message
}
}

class TaggedError<T extends string> extends Error {
  _tag: T
}

class UnknownError implements TaggedError<"UnknownError"> {
  constructor(error: Error) {
    super(error.message)
    this.stack = error.stack
  }
}