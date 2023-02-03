/* istanbul ignore file */
import { Effect, Layer } from "effect"
import { Service } from "../service"
import { spawn } from "node:child_process"

const layer = Layer.fromEffect(Service)(
  Effect.succeed({
    spawn: (params) => {
      const process = spawn(params.command, params.args)
      return Effect.succeed({
        pid: Effect.sync(() => process.pid),
      })
    }
   }),
)

export default layer
