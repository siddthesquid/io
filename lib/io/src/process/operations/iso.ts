import { Effect, pipe } from "effect"
import now from "./now"

const operation = pipe(
  now,
  Effect.map((_) => _.toISOString()),
)

export default operation
