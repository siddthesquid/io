import { Context, Effect, pipe } from "effect/main"

interface LoggerService {
  readonly info: (msg: string) => Effect.Effect<never, never, void>
}

const LoggerService = Context.Tag<LoggerService>()
const ops = {
  info: (msg: string) =>
    pipe(
      Effect.service(LoggerService),
      Effect.flatMap(({ info }) => info(msg)),
    ),
}

export { LoggerService }
