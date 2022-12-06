/* istanbul ignore file */
import { Effect, Layer } from "effect"
import { Service } from "../service"

const layer = Layer.fromEffect(Service)(
  Effect.succeed({ now: Effect.sync(() => new Date()) }),
)

export default layer
