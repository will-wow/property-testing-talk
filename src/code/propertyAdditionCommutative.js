import * as jsc from "jsverify";

describe("addition", () => {
  jsc.property(
    "commutative",
    jsc.number,
    jsc.number,
    (n1, n2) => n1 + n2 === n2 + n1
  );
});
