import * as T from "@effect/core/io/Effect"
import * as L from "@effect/core/io/Layer"
import { ConsoleService } from "./service"

const live = L.fromEffect(ConsoleService)(
  T.sync(() => ({
    log: (msg: string) => T.sync(() => console.log(msg)),
    error: (msg: string) => T.sync(() => console.error(msg)),
  })),
)

const ignore = L.fromEffect(ConsoleService)(
  T.sync(() => ({
    log: (_: string) => T.sync(() => {}),
    error: (_: string) => T.sync(() => {}),
  })),
)

export { live, ignore }
