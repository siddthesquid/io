/* eslint-disable prefer-rest-params */
export function pipe<A1>(a1: A1): A1

export function pipe<A1, A2>(a1: A1, a1a2: (a: A1) => A2): A2

export function pipe<A1, A2, A3>(
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
): A3

export function pipe<A1, A2, A3, A4>(
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
): A4

export function pipe<A1, A2, A3, A4, A5>(
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
): A5

export function pipe<A1, A2, A3, A4, A5, A6>(
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
): A6

export function pipe<A1, A2, A3, A4, A5, A6, A7>(
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
  a6a7: (f: A6) => A7,
): A7

export function pipe<A1, A2, A3, A4, A5, A6, A7, A8>(
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
  a6a7: (f: A6) => A7,
  a7a8: (g: A7) => A8,
): A8

export function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9>(
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
  a6a7: (f: A6) => A7,
  a7a8: (g: A7) => A8,
  a8a9: (h: A8) => A9,
): A9

export function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10>(
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
  a6a7: (f: A6) => A7,
  a7a8: (g: A7) => A8,
  a8a9: (h: A8) => A9,
  a9a10: (i: A9) => A10,
): A10

export function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11>(
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
  a6a7: (f: A6) => A7,
  a7a8: (g: A7) => A8,
  a8a9: (h: A8) => A9,
  a9a10: (i: A9) => A10,
  a10a11: (j: A10) => A11,
): A11

export function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12>(
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
  a6a7: (f: A6) => A7,
  a7a8: (g: A7) => A8,
  a8a9: (h: A8) => A9,
  a9a10: (i: A9) => A10,
  a10a11: (j: A10) => A11,
  a11a12: (k: A11) => A12,
): A12

export function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13>(
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
  a6a7: (f: A6) => A7,
  a7a8: (g: A7) => A8,
  a8a9: (h: A8) => A9,
  a9a10: (i: A9) => A10,
  a10a11: (j: A10) => A11,
  a11a12: (k: A11) => A12,
  a12a13: (l: A12) => A13,
): A13

export function pipe<
  A1,
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
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
  a6a7: (f: A6) => A7,
  a7a8: (g: A7) => A8,
  a8a9: (h: A8) => A9,
  a9a10: (i: A9) => A10,
  a10a11: (j: A10) => A11,
  a11a12: (k: A11) => A12,
  a12a13: (l: A12) => A13,
  a13a14: (m: A13) => A14,
): A14

export function pipe<
  A1,
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
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
  a6a7: (f: A6) => A7,
  a7a8: (g: A7) => A8,
  a8a9: (h: A8) => A9,
  a9a10: (i: A9) => A10,
  a10a11: (j: A10) => A11,
  a11a12: (k: A11) => A12,
  a12a13: (l: A12) => A13,
  a13a14: (m: A13) => A14,
  a14a15: (n: A14) => A15,
): A15

export function pipe<
  A1,
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
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
  a6a7: (f: A6) => A7,
  a7a8: (g: A7) => A8,
  a8a9: (h: A8) => A9,
  a9a10: (i: A9) => A10,
  a10a11: (j: A10) => A11,
  a11a12: (k: A11) => A12,
  a12a13: (l: A12) => A13,
  a13a14: (m: A13) => A14,
  a14a15: (n: A14) => A15,
  a15a16: (o: A15) => A16,
): A16

export function pipe<
  A1,
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
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
  a6a7: (f: A6) => A7,
  a7a8: (g: A7) => A8,
  a8a9: (h: A8) => A9,
  a9a10: (i: A9) => A10,
  a10a11: (j: A10) => A11,
  a11a12: (k: A11) => A12,
  a12a13: (l: A12) => A13,
  a13a14: (m: A13) => A14,
  a14a15: (n: A14) => A15,
  a15a16: (o: A15) => A16,
  a16a17: (p: A16) => A17,
): A17

export function pipe<
  A1,
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
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
  a6a7: (f: A6) => A7,
  a7a8: (g: A7) => A8,
  a8a9: (h: A8) => A9,
  a9a10: (i: A9) => A10,
  a10a11: (j: A10) => A11,
  a11a12: (k: A11) => A12,
  a12a13: (l: A12) => A13,
  a13a14: (m: A13) => A14,
  a14a15: (n: A14) => A15,
  a15a16: (o: A15) => A16,
  a16a17: (p: A16) => A17,
  a17a18: (q: A17) => A18,
): A18

export function pipe<
  A1,
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
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
  a6a7: (f: A6) => A7,
  a7a8: (g: A7) => A8,
  a8a9: (h: A8) => A9,
  a9a10: (i: A9) => A10,
  a10a11: (j: A10) => A11,
  a11a12: (k: A11) => A12,
  a12a13: (l: A12) => A13,
  a13a14: (m: A13) => A14,
  a14a15: (n: A14) => A15,
  a15a16: (o: A15) => A16,
  a16a17: (p: A16) => A17,
  a17a18: (q: A17) => A18,
  a18a19: (r: A18) => A19,
): A19

export function pipe<
  A1,
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
  a1: A1,
  a1a2: (a: A1) => A2,
  a2a3: (b: A2) => A3,
  a3a4: (c: A3) => A4,
  a4a5: (d: A4) => A5,
  a5a6: (e: A5) => A6,
  a6a7: (f: A6) => A7,
  a7a8: (g: A7) => A8,
  a8a9: (h: A8) => A9,
  a9a10: (i: A9) => A10,
  a10a11: (j: A10) => A11,
  a11a12: (k: A11) => A12,
  a12a13: (l: A12) => A13,
  a13a14: (m: A13) => A14,
  a14a15: (n: A14) => A15,
  a15a16: (o: A15) => A16,
  a16a17: (p: A16) => A17,
  a17a18: (q: A17) => A18,
  a18a19: (r: A18) => A19,
  a19a20: (s: A19) => A20,
): A20

export function pipe(a1: unknown, ...fs: Function[]): unknown {
  try {
    let value = a1
    for (let i = 0; i < fs.length; i += 1) {
      value = fs[i]!(value)
    }
    return value
  } catch (err) {
    if (err instanceof Error) {
      const stackByLines = err.stack?.split("\n")
      if (stackByLines !== undefined) {
        err.stack = stackByLines
          .filter((line) => !line.includes("function/pipe"))
          .join("\n")
      }
    }
    throw err
  }
}
