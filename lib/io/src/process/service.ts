/* eslint-disable max-classes-per-file */
import { Context, Effect } from "effect"

export class ProcessNotLaunched {
  readonly _tag = "ProcessNotLaunched"

  readonly error = new Error("The process likely failed to spawn.")
}

export class ProcessNotRunning {
  readonly _tag = "ProcessNotRunning"

  readonly error = new Error("The process is not running.")
}

type SpawnParams<R1, E1, R2, E2, R3, E3> = {
  command: string
  args?: string[]
  onStdout?: (data: string) => Effect.Effect<R1, E1, void>
  onStderr?: (data: string) => Effect.Effect<R2, E2, void>
  onExit?: (code: number) => Effect.Effect<R3, E3, void>
}

type Process = {
  pid: Effect.Effect<never, ProcessNotLaunched, number>
  // write: (input: string) => Effect.Effect<never, never, void>
  kill: (
    signal?: number | NodeJS.Signals | undefined,
  ) => Effect.Effect<never, never, void>
  // destroy: Effect.Effect<never, never, void>
  // disconnected: Effect.Effect<never, never, boolean>
  // exitCode: Effect.Effect<never, never, number | null>
  // signalCode: Effect.Effect<never, never, NodeJS.Signals | null>
}

interface ProcessService {
  readonly spawn: (params: SpawnParams) => Effect.Effect<never, never, Process>
}

const Service = Context.Tag<ProcessService>()

export type { ProcessService, SpawnParams, Process }
export { Service }
