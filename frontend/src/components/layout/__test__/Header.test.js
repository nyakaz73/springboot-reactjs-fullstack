import React from "react";
import ReactDOM from "react-dom"
import { cleanup, act } from "@testing-library/react";
import Header from "../Header";

//for Snapshot testing
import renderer from 'react-test-renderer';

//unmount and clean DOM after every test
//afterEach(cleanup);
let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});


it("renders Header without crashing", () => {
    //Paint the DOM with component
    act(() => {
        ReactDOM.render(<Header />, container)
    })
    expect(container.textContent).toBe("User Registration")
})

it("renders Header with a prop", () => {
    //Paint the DOM with component
    const title = "My Header";
    act(() => {
        ReactDOM.render(<Header title={title} />, container)
    })
    expect(container.textContent).toBe("My Header")
})

it("matches snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
})

it("matches snapshot with a prop", () => {
    const title = "My title"
    const tree = renderer.create(<Header title={title} />).toJSON();
    expect(tree).toMatchSnapshot();
})