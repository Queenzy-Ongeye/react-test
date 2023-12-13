import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet renders Correct", () => {
  render(<Greet name={"Nyota"} />)
  const greetTest = screen.getByText("Nyota") //introduced regux to ignore the fail
  expect(greetTest).toBeInTheDocument()
});

test("Greet by name", () => { 
  render(<Greet name="Nyota" />)
  const testElement = screen.getByText("Nyota")
  expect(testElement).toBeInTheDocument()
})