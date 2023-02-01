import { flow, pipe } from "#"

const PROGRAM: unique symbol = Symbol("PROGRAM")
const ERROR: unique symbol = Symbol("ERROR")
type UnknownError = "UnknownError"

interface ProgramError<T extends string> {
  [ERROR]: undefined
  _tag: T
  _error: Error
}

type AnyError = ProgramError<string> | Error

type AnyProgramError<E extends AnyError> = E extends ProgramError<infer T>
  ? ProgramError<T>
  : ProgramError<UnknownError>

const createError = <E extends string>(
  tag: E,
  error: Error,
): ProgramError<E> => ({
  [ERROR]: undefined,
  _tag: tag,
  _error: error,
})

interface Program<E, A> extends PromiseLike<A> {
  [PROGRAM]: undefined
  _thunk: () => Promise<A>
  _cleanup: (a: A) => void
}

type ProgramLike<E, A> = Program<E, A> | PromiseLike<A> | A

type Programmed<P extends ProgramLike<any, any>> = P extends Program<
  infer E,
  infer A
>
  ? Program<E, A>
  : P extends PromiseLike<infer A>
  ? Program<never, A>
  : Program<never, P>

type AwaitedProgramResult<P extends ProgramLike<any, any>> = P extends Program<
  any,
  infer A
>
  ? A
  : never

type AwaitedProgramError<P extends ProgramLike<any, any>> = P extends Program<
  infer E,
  any
>
  ? E
  : never

type P<A> = PromiseLike<A> & {
  b: number
}

const trySomething = async () => 10

const a = {
  a: 10,
}

