import { Effect, pipe } from "effect"
import { spawn as spawn_ } from "node:child_process"

type Stringable = { toString: () => string }

type SpawnParams = {
  command: string
  args?: string[]
  onStdout?: (data: string) => Effect.Effect<never, never, void>
  onStderr?: (data: string) => Effect.Effect<never, never, void>
  onExit?: (code: number) => Effect.Effect<never, never, void>
  onError?: (code: number) => Effect.Effect<never, never, void>
}

type Process = {
  pid: Effect.Effect<never, void, number>
}

const defaultOnStdout = (data: string) => Effect.sync(() => console.log(data))
const defaultOnStderr = (data: string) => Effect.sync(() => console.error(data))
const defaultOnEnd = () => Effect.succeed(null)

const defaultSpawnParams = {
  args: [],
  onStdout: defaultOnStdout,
  onStderr: defaultOnStderr,
  onExit: defaultOnEnd,
  onError: defaultOnEnd,
}

const spawn = (params: SpawnParams): Effect.Effect<never, string, Process> => {
  const { command, args, onStdout, onStderr } = {
    ...defaultSpawnParams,
    ...params,
  }
  try {
    const process = spawn_(command, args)

    process.stdout.on("data", (data: Stringable) =>
      pipe(data.toString().split("\n").map(onStdout), Effect.collectAll),
    )

    process.stderr.on("data", (data: Stringable) =>
      pipe(data.toString().split("\n").map(onStderr), Effect.collectAll),
    )

    process.on("close", (data) => console.log("yo"))
    process.on("error", (data) => console.log("yooo"))

    return Effect.succeed({
      pid: process.pid ? Effect.succeed(process.pid) : Effect.fail("nope"),
    })
  } catch {
    return Effect.fail("nope")
  }
}
const program = Effect.gen(function* ($) {
  const process = yield* $(spawn({ command: "ls", args: ["-lh", "/usr"] }))
  const pid = yield* $(process.pid)
  console.log(pid)
})

pipe(program, Effect.unsafeRunPromise)
  .then(() => console.log("done"))
  .catch(() => console.log("blah"))
