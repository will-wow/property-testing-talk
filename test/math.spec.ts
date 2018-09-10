import "mocha";
import { expect } from "chai";

import * as jsc from "jsverify";

describe("addition", () => {
  jsc.property("commutative", jsc.number, jsc.number, (n1, n2) => {
    expect(n1 + n2).to.equal(n2 + n1);
    return true;
  });

  jsc.property(
    "associative",
    jsc.number,
    jsc.number,
    jsc.number,
    (n1, n2, n3) => {
      expect(n1 + n2 + n3).to.equal(n1 + (n2 + n3));
      return true;
    }
  );

  jsc.property("identity", jsc.number, n1 => {
    expect(0 + n1).to.equal(n1);
    return true;
  });
});

describe.only("subtraction", () => {
  jsc.property("commutative", jsc.number, jsc.number, (n1, n2) => {
    // This isn't right!
    expect(n1 - n2).to.equal(n2 - n1);
    return true;
  });
});