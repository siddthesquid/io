import { Effect, Layer } from "effect"
import { Service } from "../service"

const layer = (date: Date) =>
  Layer.fromEffect(Service)(Effect.succeed({ now: Effect.sync(() => date) }))

export default layer
