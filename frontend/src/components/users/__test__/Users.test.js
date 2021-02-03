import React from "react";
import ReactDOM from "react-dom";
import { act, fireEvent, render } from "@testing-library/react";
import Users from "../Users";
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


it("Renders <Users/> without crashing", () => {
    const removeUser = jest.fn()
    const users = [
        {
            id: "1",
            name: "John",
            surname: "Marcus",
            username: "johnny",
            email: "john@gmail.com",
            password: "some-strong-password",
        },
        {
            id: "2",
            name: "Peter",
            surname: "Rubel",
            username: "peter",
            email: "peter@gmail.com",
            password: "some-strong-password2",
        },
        {
            id: "3",
            name: "Daniel",
            surname: "James",
            username: "daniel",
            email: "daniel@gmail.com",
            password: "some-strong-password3",
        },
    ];
    // Simulate an async call
    global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(users)
    );
    act(() => {
        ReactDOM.render(<Users users={users} removeUser={removeUser} />, container);
    });
    expect(container.textContent).toContain(users[0].email);
    expect(container.textContent).toContain(users[0].name);
    expect(container.textContent).toContain(users[0].surname);
    expect(container.textContent).toContain(users[1].email);
    expect(container.textContent).toContain(users[2].email);
})

it("matches snapshot", () => {
    const removeUser = jest.fn()
    const users = []
    const tree = renderer.create(<Users users={users} removeUser={removeUser} />).toJSON();
    expect(tree).toMatchSnapshot();

})