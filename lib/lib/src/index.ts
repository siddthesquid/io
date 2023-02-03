import { flow, pipe, _FunctionUtil } from "./function"
import _MemoryUtil from "./memory"

const X = {
  ..._FunctionUtil,
  ..._MemoryUtil,
}

export { X, flow, pipe }
