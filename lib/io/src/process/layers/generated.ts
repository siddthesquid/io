import { Effect, Layer } from "effect"
import { Service } from "../service"

const layer = (initialDate: Date, generateNextDate: (date: Date) => Date) => {
  let date = initialDate
  return Layer.fromEffect(Service)(
    Effect.succeed({
      now: Effect.sync(() => {
        const oldDate = date
        date = generateNextDate(date)
        return oldDate
      }),
    }),
  )
}

export default layer
