import { makeThing } from "../module-a"

const thing = makeThing("hello world")

// get the BLAH env var
const { BLAH } = process.env

export { thing, BLAH }
