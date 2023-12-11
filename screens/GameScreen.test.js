import GameScreen, { generateRandomBetween } from "./GameScreen";
import { render, screen } from "@testing-library/react-native";

it("testing the generateRandom function", () => {
  const result = generateRandomBetween(1, 11, 5);

  expect(result).not.toBe(5);
  expect(result).toBeLessThanOrEqual(9);
  expect(result).toBeGreaterThanOrEqual(1);
});

describe("GameScreen", () => {
  it("should render the opponents initial guess", () => {
    const userNumber = 50;
    render(<GameScreen userNumber={userNumber} />);

    const opponentNumber = screen.findByText(userNumber);

    // expect(screen.findByText(userNumber)).toBeOnTheScreen();
    // expect(screen.findByText(userNumber)).toBeTruthy();
  });
  it("should compare two values like ===", () => {
    const person = { name: "John" };
    const name = person.name;
    expect(name).toBe("John");
  });
});
