import { Context, Effect } from "effect"

interface ClockService {
  readonly now: Effect.Effect<never, never, Date>
}

const Service = Context.Tag<ClockService>()

export type { ClockService }
export { Service }
