import { flow, pipe } from "#"

interface TaggedError {
  readonly _error: string
}

interface Program<E extends TaggedError, A> extends PromiseLike<A> {
  thunk: () => Promise<A>
  cleanup?: () => void
}

type Success<Value> = Program<never, Value>
type Failure<Err extends TaggedError> = Program<Err, never>

type ThunkReturnType<Thunk extends (_: any) => any> =

interface InvalidArgument extends TaggedError {
  _tag: "InvalidArgument"
}

interface OutOfBounds extends TaggedError {
  _tag: "OutOfBounds"
}

type ProgramOptions = {
  cleanup?: () => void
}

const async = <E extends AnyError, A>(
  thunk: () => Promise<A>,
  options?: ProgramOptions,
): Program<E, A> => ({
  thunk,
  cleanup: options?.cleanup,
  then: thunk().finally(options?.cleanup).then,
})

const run = <E extends AnyError, A>({
  thunk,
  cleanup,
}: Program<E, A>): Promise<A> => {
  const promise = thunk()
  if (cleanup) {
    promise.finally(cleanup)
  }
  return promise
}

export type { Program }
