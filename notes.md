# `program`

`program` provides typed wrappers to support JavaScript's `Promise`s APIs. JavaScript is the language of the web, and `Promise`s are a core feature that deserve first-class attention. `program` aims to augment the current `Promise` libraries in TypeScript with the following features:

* composable functional programming primitives
* cancellation capabilities
* leak-protecting resource lifecycle management
* transparent error handling
* intuitive, complete, and terse syntax

This was **heavily** inspired by (especially) [Effect-TS](), [fp-ts](), and [ZIO](). In fact, Effect-TS is more full featured, more mature, and supported by a community of TypeScript experts - thus probably better suited for your needs.

## Basic Usage

```ts
import { Program, pipe, flow, z, Cache } from '@siddthesquid/program'

const Dog = z.object({
  name: z.string(),
  age: z.number(),
})
type Dog = z.infer<typeof Dog>

Program.do(function* ({ $get, $run, }) => {

  const cache = yield* $get<Cache<string, Dog>>("dog_cache")
  const dogs = yield* $run(Dogs.fetch)
  for dog in dogs {
    const maybeCachedDog = yield* $run(cache.get(dog))
    if (maybeCachedDog !== null) {
      yield* $run(L
        ogger.info(`already found ${dog}: ${maybeCachedDog}`))
    } else {
      const fetchedDog = $run(Dogs.lookup(dog))
        .then(Dog.parse)
      yield* $run(cache.insert(dog, fetchedDog))
    }
  }
})
```


## Installation

### pnpm

```
pnpm add @siddthesquid/program
```

### yarn

```
yard add @siddthesquid/program
```

### npm

```
npm i @siddthesquid/program
```

## Examples

Keep in mind that EVERYTHING is type-safe! See the comments to see what the inferred types would be, or hover over variable definitions in your IDE. Each of these is individually runnable.

1. Race `n` threads to see who finishes first
2. Make an HTTP request and log the response. Indicate errors and

## Design principles

In short, the goal is for a `program` to emulate, well, a program. 

Think of your favorite programming language. What is actually included in the standard library? 

* One class of libraries, which we can loosely label the "pure" functions, includes things like arithmetic operations that primarily happen within the CPU - floating point operations, bit shifting, etc.
* Another class of operations, which we can think of as the "effectful" operations, are operating system functions, like writing to a network socket, opening a file, writing to shared memory, displaying to a monitor, etc.

One way to differentiate them might be to say that pure functions (probably) don't change the return value for a given set of a inputs. `1 + 1` is always `2`.

However, effectful operations happen in a moment in time, and they depend on the environment (e.g. there may be free memory available to allocate now, but perhaps not later), without having to know what the environment actually is. If there is no environment to interact with, there is no program. 

At the end of the day, a `program`
* describes a relationship with different effectful calls.
* 

## API Overview

### Program



### Thread

### Result

### Resource

### 

## What's wrong with `Promise`?

* No way to cancel a running promise
* Potential for resource leakage (closures are both a blessing and a curse)
* No way to know what errors might occur while a promise happens, and so structured error handling is difficult
* It's easier to compose a `() => Promise<T>` into bigger programs than it is a `Promise<T>`

Anyways, this library doesn't replace `Promise`s. It just provides an easier API to compose more complex applications safely (resource-safe and type-safe).

## Why not the other libraries?

As mentioned, there are other projects that achieve the same as `program`. The closest is defintely [Effect-TS](). Below are a few (mostly aesthetic) reasons why I decided not to go forward with that library and decided to make my own version (though they are pretty much conceptually identical)

* I want `Layer`s (called `Kernel`s in this version) to be an intersection of named services, rather than a union of types that collapse based on a `tag` property.
* There's a patched version of TypeScript required if you want to do `effect.flatmap(...)` - but I prefer to keep it vanilla if possible while having the same type of API
* Modifed API for `Generator` Monad to include more specific operations outside of just `flatmap`