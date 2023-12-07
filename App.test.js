import { fireEvent, render, screen } from "@testing-library/react-native";
import { Alert } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

//MOCKING THE ALERT WE NEED TO MOCK THE ALERT MODULE

jest.mock("react-native/Libraries/Alert/Alert", () => ({
  alert: jest.fn(),
}));

describe("App component", () => {
  it("renders correctly", () => {
    render(<StartGameScreen />);

    const startScreen = screen.getByTestId(/start-game-screen/i);
    const titleText = screen.getByText(/enter a number/i);

    expect(startScreen).toBeTruthy();
    expect(titleText).toBeTruthy();
  });

  it("validates input", () => {
    const onPickNumberMock = jest.fn();
    render(<StartGameScreen onPickNumber={onPickNumberMock} />);

    const input = screen.getByTestId(/number-input/i);
    const confirmButton = screen.getByText(/confirm/i);

    fireEvent.changeText(input, "0");
    fireEvent.press(confirmButton);
    // fireEvent(input, "onSubmitEditing");
    expect(Alert.alert).toHaveBeenCalledWith(
      "Invalid number",
      "Number hast to be a number between 1 and 99.",
      expect.anything(),
    );
    expect(onPickNumberMock).not.toHaveBeenCalled();
  });

  it("confirms valid input", () => {
    const onPickNumberMock = jest.fn();
    render(<StartGameScreen onPickNumber={onPickNumberMock} />);
    const input = screen.getByTestId(/number-input/i);
    const confirmButton = screen.getByText(/confirm/i);

    fireEvent.changeText(input, "50");
    fireEvent.press(confirmButton);
    expect(onPickNumberMock).toHaveBeenCalledWith(50);
  });
});

it("should return the drink coca-cola", () => {
  const beverage = { name: "coca-cola" };
  const drink = jest.fn((beverage) => beverage.name);

  drink(beverage);

  expect(drink).toHaveReturnedWith("coca-cola");
});
