import "mocha";
import { expect } from "chai";

import * as jsc from "jsverify";

describe("equality", () => {
  jsc.property("works", jsc.bool, b1 => {
    expect(b1).to.equal(b1);
    return true;
  });

  jsc.property("will fail", jsc.bool, jsc.bool, (b1, b2) => {
    expect(b1).to.equal(b1);
    return true;
  });
});
