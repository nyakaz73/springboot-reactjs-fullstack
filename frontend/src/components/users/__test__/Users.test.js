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
    const users = []
    render(<Users users={users} removeUser={removeUser} />)
})