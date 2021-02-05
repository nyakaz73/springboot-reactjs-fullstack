import React from "react";
import { act, render, cleanup } from "@testing-library/react";
import Button from "../Button";
import renderer from "react-test-renderer"

afterEach(cleanup)

it("renders Button without crashing", () => {
    //Paint the DOM with component
    const { container } = render(<Button />)
    expect(container.textContent).toBe("Submit")
})

it("matches snapshot", () => {
    const tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
})