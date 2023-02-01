const as =
  <T>(value: T) =>
  () =>
    value

const tap =
  <T>(fn: (value: T) => any) =>
  (value: T): T => {
    fn(value)
    return value
  }

const provide =
  <T>(value: T) =>
  <U>(fn: (value: T) => U) =>
    fn(value)

const logWith =
  (tag: string) =>
  <T>(value: T) =>
    tap<T>((value_) => console.log(`${tag || ""}${value_}`))(value)

const log = <T>(value: T) => tap<T>(console.log)(value)

export { as, tap, provide, log, logWith }
