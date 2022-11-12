import * as T from "@effect/core/io/Effect"
import { Tag } from "@tsplus/stdlib/service/Tag"

export interface ConsoleService {
  readonly log: (msg: string) => T.Effect<unknown, never, void>
  readonly error: (msg: string) => T.Effect<unknown, never, void>
}

export const ConsoleService = Tag<ConsoleService>()

const Console = {
  log: (msg: string) =>
    T.serviceWithEffect(ConsoleService, (console) => console.log(msg)),
  error: (msg: string) =>
    T.serviceWithEffect(ConsoleService, (console) => console.error(msg)),
}

export { Console }
