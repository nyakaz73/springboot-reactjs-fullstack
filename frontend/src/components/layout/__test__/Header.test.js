import React from "react";
import ReactDOM from "react-dom"
import { cleanup, act } from "@testing-library/react";
import Header from "../Header";

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


it("render Header without crashing", () => {
    //Paint the DOM with component
    act(() => {
        ReactDOM.render(<Header />, container)
    })
})