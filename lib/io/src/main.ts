import { Duration, Effect, pipe } from "effect"
import { Clock } from "."

const program = Effect.gen(function* ($) {
  console.log((yield* $(Clock.now)).toISOString())
  yield* $(Effect.sleep(Duration.seconds(1)))
  console.log((yield* $(Clock.now)).toISOString())
  yield* $(Effect.sleep(Duration.seconds(1)))
  console.log(yield* $(Clock.iso))
  yield* $(Effect.sleep(Duration.seconds(1)))
})

pipe(
  pipe(program, Effect.provideLayer(Clock.layers.live)),
  Effect.flatMap(() =>
    pipe(
      program,
      Effect.provideLayer(Clock.layers.constant(new Date(1638688737000))),
    ),
  ),
  Effect.flatMap(() =>
    pipe(
      program,
      Effect.provideLayer(
        Clock.layers.generate(
          new Date(1638688737000),
          (date) => new Date(date.getTime() + 1000),
        ),
      ),
    ),
  ),
  Effect.unsafeRunAsync,
)
