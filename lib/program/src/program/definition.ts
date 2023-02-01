type Program<K, E, V> = {
  run: (k: K) => Promise<V>
  cleanup: () => Promise<void>
  handle: (e: E) => Promise<void>
}

type Thing = "a" | "b" | "c"
const f = <Z extends Thing>(z: Z) => {
  switch (z) {
    case "a":
      return 1
    case "b":
      return 2
    case "c":
      return 3
    default:
      return {} as never
  }
}
