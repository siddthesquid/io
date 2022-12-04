import { Context, Effect, Layer, pipe } from "effect"

export interface ConsoleService {
  readonly log: (msg: string) => Effect.Effect<never, never, void>
}

export const ConsoleService = Context.Tag<ConsoleService>()

export const ConsoleLive = Layer.fromEffect(ConsoleService)(
  Effect.sync(() => ({
    log: (msg: string) => Effect.sync(() => console.log(msg)),
  })),
)

export const ConsoleTee = <RIn, E>(
  layer: Layer.Layer<RIn, E, ConsoleService>,
) =>
  pipe(
    layer,
    Layer.flatMap((_) =>
      Layer.fromEffect(ConsoleService)(
        Effect.gen(function* ($) {
          const tee = Context.get<ConsoleService, Context.Tag<ConsoleService>>(
            ConsoleService,
          )(_)
          const next = yield* $(Effect.service(ConsoleService))
          return {
            log: (msg: string) =>
              Effect.gen(function* ($) {
                yield* $(tee.log(msg))
                yield* $(next.log(msg))
              }),
          }
        }),
      ),
    ),
  )

export const program = Effect.gen(function* ($) {
  const { log } = yield* $(Effect.service(ConsoleService))
  yield* $(log("foo"))
})

pipe(
  program,
  Effect.provideLayer(ConsoleTee(ConsoleLive)),
  Effect.provideLayer(ConsoleLive),
  Effect.unsafeFork,
)
