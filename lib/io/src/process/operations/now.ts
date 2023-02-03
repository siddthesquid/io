import { Effect, pipe } from "effect"
import { Service } from "../service"

const operation = pipe(
  Effect.service(Service),
  Effect.flatMap(({ now }) => now),
)

export default operation
