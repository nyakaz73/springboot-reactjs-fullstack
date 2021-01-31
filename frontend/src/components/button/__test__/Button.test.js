import React from "react";
import ReactDOM from "react-dom";
import { act } from "@testing-library/react";
import Button from "../Button";
import renderer from "react-test-renderer"
let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});


it("renders Button without crashing", () => {
    //Paint the DOM with component
    act(() => {
        ReactDOM.render(<Button />, container)
    })
    expect(container.textContent).toBe("Submit")
})

it("matches snapshot", () => {
    const tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
})