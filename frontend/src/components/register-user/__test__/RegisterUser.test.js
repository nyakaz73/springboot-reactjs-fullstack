import React from "react";
import ReactDOM from "react-dom";
import { act } from "@testing-library/react";
import RegisterUser from "../RegisterUser";
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

it("renders RegisterUser without crashing", () => {
    act(() => {
        ReactDOM.render(<RegisterUser />, container)
    })
})