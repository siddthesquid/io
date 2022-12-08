import constant from "./layers/constant"
import generated from "./layers/generated"
import live from "./layers/live"
import iso from "./operations/iso"
import now from "./operations/now"

const Clock = {
  now,
  iso,
  layers: { live, generated, constant },
}

export default Clock
