import React from "react";
import ReactDOM from "react-dom";
import { act, render } from "@testing-library/react";
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
    const fakeUser = {
        id: "1",
        name: "John",
        surname: "Marcus",
        username: "johnny",
        email: "john@gmail.com",
        password: "some-strong-password",
    };
    // Simulate an async call
    global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser),
        })
    );
    act(() => {
        ReactDOM.render(<UserInfo user={fakeUser} removeUser={removeUser} />, container);
    });
    expect(container.textContent).toContain(fakeUser.name);
    expect(container.textContent).toContain(fakeUser.surname);
    expect(container.textContent).toContain(fakeUser.email);
    expect(container.textContent).toContain(fakeUser.username);

})

it("onClick deleteUser button fired", () => {
    const removeUser = jest.fn()
    const user = {
        'name': 'John',
        'surname': 'Doe',
        'email': 'john@gmail.com',
        'username': 'johnny',
    }

    const utils = render(<UserInfo user={user} removeUser={removeUser} />)
    const removeButton = utils.getByLabelText('delete-button')
    act(() => {
        removeButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    //removeButton.dispatchEvent(new MouseEvent('click'));
    expect(removeUser).toHaveBeenCalledTimes(1)
})

it("<UserInfo/> matches snapshot", () => {
    const removeUser = jest.fn()
    const user = {}
    const tree = renderer.create(<UserInfo user={user} removeUser={removeUser} />).toJSON();
    expect(tree).toMatchSnapshot();
})

