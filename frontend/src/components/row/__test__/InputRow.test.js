import React from "react";
import { render, cleanup } from "@testing-library/react";
import InputRow from "../InputRow";
import renderer from "react-test-renderer"

afterEach(cleanup)

it("Renders without crashing", () => {
    const label = "Hello"
    const { container } = render(<InputRow label={label}><input />
    </InputRow>)
    expect(container.textContent).toBe('Hello');
})

it("matches snapshot", () => {
    const label = "Hello"
    const tree = renderer.create(<InputRow label={label}>
        <input />
    </InputRow>)

    expect(tree).toMatchSnapshot();
})