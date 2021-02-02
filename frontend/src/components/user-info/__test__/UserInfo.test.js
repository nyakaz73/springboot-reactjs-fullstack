import React from "react";
import ReactDOM from "react-dom";
import { act, fireEvent, render } from "@testing-library/react";
import UserInfo from "../UserInfo";
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

it("It Renders <UserInfo/> without crashing", () => {
    const removeUser = jest.fn()
    const user = {
        'name': 'John',
        'surname': 'Doe',
        'email': 'john@gmail.com',
        'username': 'johnny',
    }
    act(() => {
        ReactDOM.render(<UserInfo user={user} removeUser={removeUser} />, container);
    });
    expect(container.textContent).toContain(user.name);
    expect(container.textContent).toContain(user.surname);
    expect(container.textContent).toContain(user.email);
    expect(container.textContent).toContain(user.username);

})

it("<UserInfo/> matches snapshot", () => {
    const tree = renderer.create(<UserInfo />).toJSON();
    expect(tree).toMatchSnapshot();
})

