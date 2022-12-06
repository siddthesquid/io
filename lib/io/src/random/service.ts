import { Context, Effect, pipe } from "effect"

interface RandomService {
  readonly next: Effect.Effect<never, never, number>
  readonly nextInt: (
    min: number,
    max: number,
  ) => Effect.Effect<never, never, number>
  readonly shuffled: <A>(
    as: readonly A[],
  ) => Effect.Effect<never, never, readonly A[]>
  readonly pick: <A>(as: readonly A[]) => Effect.Effect<never, never, A>
  readonly pickSome: <A>(
    as: readonly A[],
    amount: number,
  ) => Effect.Effect<never, never, readonly A[]>
}

interface ClockService {
  readonly now: Effect.Effect<never, never, Date>
}

const Service = Context.Tag<ClockService>()

const ops = {
  now: pipe(
    Effect.service(Service),
    Effect.flatMap(({ now }) => now),
  ),
}

export type { ClockService }
export { Service, ops }
