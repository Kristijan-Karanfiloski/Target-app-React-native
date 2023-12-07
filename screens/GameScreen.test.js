import { generateRandomBetween } from "./GameScreen";

it("testing the generateRandom function", () => {
  const result = generateRandomBetween(1, 11, 5);

  expect(result).not.toBe(5);
  expect(result).toBeLessThanOrEqual(9);
  expect(result).toBeGreaterThanOrEqual(1);
});
