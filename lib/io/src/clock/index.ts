import constant from "./layers/constant"
import generate from "./layers/generate"
import live from "./layers/live"
import iso from "./operations/iso"
import now from "./operations/now"

const Clock = {
  now,
  iso,
  layers: { live, generate, constant },
}

export default Clock
