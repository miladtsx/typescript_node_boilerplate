import { greet } from "../hello";

describe("greet", () => {
  it('should return "Hello, World!"', () => {
    expect(greet()).toBe("Hello, World!");
  });
});
