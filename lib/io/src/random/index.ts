import constant from "./layers/constant"
import generate from "./layers/generate"
import live from "./layers/live"
import { ops } from "./service"

const Clock = {
  ...ops,
  layers: { live, generate, constant },
}

export default Clock
