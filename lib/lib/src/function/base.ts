const as =
  <T>(value: T) =>
  () =>
    value

const sync = <T>(value: () => T) => value

const id = <T>(value: T) => value

const declare =
  <T>() =>
  (value: T) =>
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

const debugWith =
  (tag: string = "DEBUG: ") =>
  <T>(value: T) =>
    tap<T>((value_) =>
      console.log(`${tag || ""}${JSON.stringify(value_, null, 2)}`),
    )(value)

const debug = <T>(value: T) => tap<T>(console.log)(value)

const _BaseUtil = {
  as,
  sync,
  id,
  declare,
  tap,
  provide,
  debug,
  debugWith,
}

export default _BaseUtil
