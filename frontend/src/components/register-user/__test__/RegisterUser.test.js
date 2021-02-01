import React from "react";
import ReactDOM from "react-dom";
import { act, fireEvent, render } from "@testing-library/react";
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

const setup = () => {

}
//To test the state of the form we use Enzyme simulate or React Testing Lib simulate events
it("update on onChange state on input form", () => {
    const utils = render(<RegisterUser />);
    const input = utils.getByPlaceholderText('Name');
    fireEvent.change(input, { target: { value: 'John' } })
    expect(input.value).toBe("John")
})

