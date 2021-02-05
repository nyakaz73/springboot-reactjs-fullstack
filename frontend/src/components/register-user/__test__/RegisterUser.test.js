import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import RegisterUser from "../RegisterUser";
import renderer from "react-test-renderer"

//Context Management
afterEach(cleanup);

it("renders RegisterUser without crashing", () => {
    render(<RegisterUser />)
})

//To test the state of the form we use Enzyme simulate or React Testing Lib simulate events
it("update on onChange state on input form", () => {
    const { getByPlaceholderText } = render(<RegisterUser />);
    const input = getByPlaceholderText('Name');
    fireEvent.change(input, { target: { value: 'John' } })
    expect(input.value).toBe("John")
})

const setup = (placeholder, value) => {
    const { getByPlaceholderText } = render(<RegisterUser />);
    const input = getByPlaceholderText(placeholder);
    fireEvent.change(input, { target: { value: value } })
    return input.value;
}


it("Test Surname Input", () => {
    const value = setup("Surname", "Doe")
    expect(value).toBe("Doe")
})

it("Test Email Input", () => {
    const value = setup("Email", "tafadzwalnyamukapa@gmail.com")
    expect(value).toBe("tafadzwalnyamukapa@gmail.com")
})

it("Test Username Input", () => {
    const value = setup("Username", "johhny")
    expect(value).toBe("johhny")
})

it("onSubmit with addUser callback Prop fired", () => {
    //Mocking a callback function
    const addUser = jest.fn();
    const { getByText } = render(<RegisterUser addUser={addUser} />)
    const submitButton = getByText('Submit');
    submitButton.dispatchEvent(new MouseEvent('click'));
    expect(addUser).toHaveBeenCalledTimes(1)
})

it("matches snapshots", () => {
    const tree = renderer.create(<RegisterUser />).toJSON()
    expect(tree).toMatchSnapshot()
})
