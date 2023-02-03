/* eslint-disable no-underscore-dangle */

type Mappable<A> = {
  _map: <B, BB extends Mappable<B>>(f: (a: A) => B) => Mappable<B>
}

const Mappable = {
  map:
    <A, B, BB extends Mappable<B>>(f: (a: A) => B) =>
    (mappable: Mappable<A>): BB =>
      mappable._map(f),
}

type Chainable<A> = {
  _chain: <B, BB extends Chainable<B>>(f: (a: A) => Chainable<B>) => BB
}

const Chainable = {
  chain:
    <A, B, BB extends Chainable<B>>(f: (a: A) => Chainable<B>) =>
    (chainable: Chainable<A>): BB =>
      chainable._chain(f),
}

type Option<A> = Mappable<A>
// & Chainable<A>

const Option = {
  ...Mappable,
  // ...Chainable,
}

const Some = <A>(a: A): Option<A> => ({
  _map: <B, BB extends Option<B>>(f: (a: A) => B): Option<B> => Some(f(a)),
  // _chain: (f) => f(a),
})

const None: Option<never> = {
  _map: () => None,
  _chain: () => None,
}
