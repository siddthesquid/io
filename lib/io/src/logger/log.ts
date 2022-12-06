type Level = "TRACE" | "DEBUG" | "INFO" | "NOTICE" | "WARN" | "ERROR" | "FATAL"

type Log = {
  readonly message: string
  readonly level?: Level
  readonly tags?: Record<string, any>
  readonly getTimestamp?: () => string
}

const log = (
  message: string,
  level?: Level,
  tags?: Record<string, any>,
  getTimestamp?: () => string,
): Log => ({
  message,
  level,
  tags,
  getTimestamp,
})

type LogEncoder = (log: Log) => string

const asJson: LogEncoder = (_) =>
  JSON.stringify({
    _timestamp: _.getTimestamp?.(),
    _level: _.level,
    _message: _.message,
    ..._.tags,
  })

const asLine: LogEncoder = (_) => {
  const timestamp = (_.getTimestamp && `${_.getTimestamp()} `) || ""
  const level = (_.level && `[${_.level}] `) || ""
  const tags = Object.entries(_.tags || {})
    .map(([key, value]) => `${key}=${JSON.stringify(value)}`)
    .join(" ")
  return `${timestamp}${level}${_.message} ${tags}`
}

const randomLog: Log = {
  getTimestamp: () => new Date().toISOString(),
  level: "INFO",
  message: "hello world",
  tags: {
    foo: "bar",
    baz: 123,
    blah: {
      a: 1,
      b: true,
      c: "3",
    },
  },
}

const randomLog2: Log = {
  message: "hello world",
}

console.log(asJson(randomLog))
console.log(asLine(randomLog))

console.log(asJson(randomLog2))
console.log(asLine(randomLog2))
