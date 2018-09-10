import * as jsc from "jsverify";
import * as _ from "lodash";
import { OrderType, Order, OrderBook } from "./order-book";

const arbitraryNonNegativeNumber: jsc.Arbitrary<number> = jsc.number.smap(
  Math.abs,
  _.identity
);

const arbitraryPositiveNumber: jsc.Arbitrary<number> = jsc.suchthat(
  arbitraryNonNegativeNumber,
  n => n > 0
);

const arbitraryId = jsc.asciinestring;

export const arbitraryOrderType = jsc.oneof([
  jsc.constant("buy"),
  jsc.constant("sell")
]) as jsc.Arbitrary<OrderType>;

export const arbitraryOrder: jsc.Arbitrary<Order> = jsc.record({
  id: arbitraryId,
  userId: arbitraryId,
  limitPrice: arbitraryPositiveNumber,
  quantity: arbitraryPositiveNumber
});

export const arbitraryOrderBook: jsc.Arbitrary<OrderBook> = jsc.record({
  buy: jsc.array(arbitraryOrder),
  sell: jsc.array(arbitraryOrder)
});

const orderSampler = jsc.sampler(arbitraryOrder, 5);

export const randomOrder = (overrides: Partial<Order> = {}) =>
  _.merge(orderSampler(1), overrides);

console.log(randomOrder());
console.log(randomOrder({ limitPrice: 2 }));
