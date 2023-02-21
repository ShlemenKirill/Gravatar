import "mocha";
import { assert } from "chai";
import { gravatarURL } from "../src/index";

describe("getGravatarUrl Function", () => {
  it("should be a function", () => {
    assert.isFunction(gravatarURL.getGravatarUrl);
  });

  it("should return correct link", () => {
    const expected =
      "https://www.gravatar.com/avatar/93942e96f5acd83e2e047ad8fe03114d?default=identicon";
    const gravatarType = gravatarURL.GravatarTypes.IDENTICON;
    const actual = gravatarURL.getGravatarUrl("test@email.com", gravatarType);
    assert.equal(actual, expected);
  });
});
