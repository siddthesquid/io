/* eslint-disable prefer-rest-params */
export function flow<A1 extends ReadonlyArray<unknown>, A2>(
  a1a2: (...a: A1) => A2,
): (...a: A1) => A2

export function flow<A1 extends ReadonlyArray<unknown>, A2, A3>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
): (...a: A1) => A3

export function flow<A1 extends ReadonlyArray<unknown>, A2, A3, A4>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
): (...a: A1) => A4

export function flow<A1 extends ReadonlyArray<unknown>, A2, A3, A4, A5>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
): (...a: A1) => A5

export function flow<A1 extends ReadonlyArray<unknown>, A2, A3, A4, A5, A6>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
): (...a: A1) => A6

export function flow<A1 extends ReadonlyArray<unknown>, A2, A3, A4, A5, A6, A7>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
  a6a7: (a: A6) => A7,
): (...a: A1) => A7

export function flow<
  A1 extends ReadonlyArray<unknown>,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
  a6a7: (a: A6) => A7,
  a7a8: (a: A7) => A8,
): (...a: A1) => A8

export function flow<
  A1 extends ReadonlyArray<unknown>,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
  a6a7: (a: A6) => A7,
  a7a8: (a: A7) => A8,
  a8a9: (a: A8) => A9,
): (...a: A1) => A9

export function flow<
  A1 extends ReadonlyArray<unknown>,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
  a6a7: (a: A6) => A7,
  a7a8: (a: A7) => A8,
  a8a9: (a: A8) => A9,
  a9a10: (a: A9) => A10,
): (...a: A1) => A10

export function flow<
  A1 extends ReadonlyArray<unknown>,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
  a6a7: (a: A6) => A7,
  a7a8: (a: A7) => A8,
  a8a9: (a: A8) => A9,
  a9a10: (a: A9) => A10,
  a10a11: (a: A10) => A11,
): (...a: A1) => A11

export function flow<
  A1 extends ReadonlyArray<unknown>,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12,
>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
  a6a7: (a: A6) => A7,
  a7a8: (a: A7) => A8,
  a8a9: (a: A8) => A9,
  a9a10: (a: A9) => A10,
  a10a11: (a: A10) => A11,
  a11a12: (a: A11) => A12,
): (...a: A1) => A12

export function flow<
  A1 extends ReadonlyArray<unknown>,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12,
  A13,
>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
  a6a7: (a: A6) => A7,
  a7a8: (a: A7) => A8,
  a8a9: (a: A8) => A9,
  a9a10: (a: A9) => A10,
  a10a11: (a: A10) => A11,
  a11a12: (a: A11) => A12,
  a12a13: (a: A12) => A13,
): (...a: A1) => A13

export function flow<
  A1 extends ReadonlyArray<unknown>,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12,
  A13,
  A14,
>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
  a6a7: (a: A6) => A7,
  a7a8: (a: A7) => A8,
  a8a9: (a: A8) => A9,
  a9a10: (a: A9) => A10,
  a10a11: (a: A10) => A11,
  a11a12: (a: A11) => A12,
  a12a13: (a: A12) => A13,
  a13a14: (a: A13) => A14,
): (...a: A1) => A14

export function flow<
  A1 extends ReadonlyArray<unknown>,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12,
  A13,
  A14,
  A15,
>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
  a6a7: (a: A6) => A7,
  a7a8: (a: A7) => A8,
  a8a9: (a: A8) => A9,
  a9a10: (a: A9) => A10,
  a10a11: (a: A10) => A11,
  a11a12: (a: A11) => A12,
  a12a13: (a: A12) => A13,
  a13a14: (a: A13) => A14,
  a14a15: (a: A14) => A15,
): (...a: A1) => A15

export function flow<
  A1 extends ReadonlyArray<unknown>,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12,
  A13,
  A14,
  A15,
  A16,
>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
  a6a7: (a: A6) => A7,
  a7a8: (a: A7) => A8,
  a8a9: (a: A8) => A9,
  a9a10: (a: A9) => A10,
  a10a11: (a: A10) => A11,
  a11a12: (a: A11) => A12,
  a12a13: (a: A12) => A13,
  a13a14: (a: A13) => A14,
  a14a15: (a: A14) => A15,
  a15a16: (a: A15) => A16,
): (...a: A1) => A16

export function flow<
  A1 extends ReadonlyArray<unknown>,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12,
  A13,
  A14,
  A15,
  A16,
  A17,
>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
  a6a7: (a: A6) => A7,
  a7a8: (a: A7) => A8,
  a8a9: (a: A8) => A9,
  a9a10: (a: A9) => A10,
  a10a11: (a: A10) => A11,
  a11a12: (a: A11) => A12,
  a12a13: (a: A12) => A13,
  a13a14: (a: A13) => A14,
  a14a15: (a: A14) => A15,
  a15a16: (a: A15) => A16,
  a16a17: (a: A16) => A17,
): (...a: A1) => A17

export function flow<
  A1 extends ReadonlyArray<unknown>,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12,
  A13,
  A14,
  A15,
  A16,
  A17,
  A18,
>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
  a6a7: (a: A6) => A7,
  a7a8: (a: A7) => A8,
  a8a9: (a: A8) => A9,
  a9a10: (a: A9) => A10,
  a10a11: (a: A10) => A11,
  a11a12: (a: A11) => A12,
  a12a13: (a: A12) => A13,
  a13a14: (a: A13) => A14,
  a14a15: (a: A14) => A15,
  a15a16: (a: A15) => A16,
  a16a17: (a: A16) => A17,
  a17a18: (a: A17) => A18,
): (...a: A1) => A18

export function flow<
  A1 extends ReadonlyArray<unknown>,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12,
  A13,
  A14,
  A15,
  A16,
  A17,
  A18,
  A19,
>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
  a6a7: (a: A6) => A7,
  a7a8: (a: A7) => A8,
  a8a9: (a: A8) => A9,
  a9a10: (a: A9) => A10,
  a10a11: (a: A10) => A11,
  a11a12: (a: A11) => A12,
  a12a13: (a: A12) => A13,
  a13a14: (a: A13) => A14,
  a14a15: (a: A14) => A15,
  a15a16: (a: A15) => A16,
  a16a17: (a: A16) => A17,
  a17a18: (a: A17) => A18,
  a18a19: (a: A18) => A19,
): (...a: A1) => A19

export function flow<
  A1 extends ReadonlyArray<unknown>,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12,
  A13,
  A14,
  A15,
  A16,
  A17,
  A18,
  A19,
  A20,
>(
  a1a2: (...a: A1) => A2,
  a2a3: (a: A2) => A3,
  a3a4: (a: A3) => A4,
  a4a5: (a: A4) => A5,
  a5a6: (a: A5) => A6,
  a6a7: (a: A6) => A7,
  a7a8: (a: A7) => A8,
  a8a9: (a: A8) => A9,
  a9a10: (a: A9) => A10,
  a10a11: (a: A10) => A11,
  a11a12: (a: A11) => A12,
  a12a13: (a: A12) => A13,
  a13a14: (a: A13) => A14,
  a14a15: (a: A14) => A15,
  a15a16: (a: A15) => A16,
  a16a17: (a: A16) => A17,
  a17a18: (a: A17) => A18,
  a18a19: (a: A18) => A19,
  a19a20: (a: A19) => A20,
): (...a: A1) => A20

export function flow(...fs: Function[]): unknown {
  const { stack } = new Error()
  const caller = stack?.split("\n")[2] ?? null

  return function (this: unknown) {
    try {
      let value = fs[0]!.apply(this, arguments)
      for (let i = 1; i < fs.length; i += 1) {
        value = fs[i]!(value)
      }
      return value
    } catch (err) {
      if (err instanceof Error && caller !== null) {
        const stackByLines = err.stack?.split("\n")
        const n = stackByLines?.findIndex(
          (line, i) => i >= 2 && line.includes("function/flow"),
        )
        if (stackByLines !== undefined && n !== undefined) {
          err.stack = `${stackByLines
            .slice(0, n)
            .join("\n")}\n${caller}\n${stackByLines.slice(n + 1).join("\n")}`
        }
      }
      throw err
    }
  }
}
