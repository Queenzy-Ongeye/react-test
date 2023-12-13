import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet renders Correct", () => {
  render(<Greet />)
  const greetTest = screen.getByText(/Hello/)
  expect(greetTest).toBeInTheDocument()
})