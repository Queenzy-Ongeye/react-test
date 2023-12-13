import { render, screen } from "@testing-library/react";
import SecondGreet from "./second";

test("Second test case", () => {
  render(<SecondGreet />)
  const testElement = screen.getByText("Second case");
  expect(testElement).toBeInTheDocument()
});

