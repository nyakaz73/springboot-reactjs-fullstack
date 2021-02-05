import React from "react";
import { cleanup, render } from "@testing-library/react";
import Header from "../Header";
//for Snapshot testing
import renderer from 'react-test-renderer';

//unmount and clean DOM after every test
afterEach(cleanup);

it("renders Header without crashing", () => {
    //Paint the DOM with component
    const { container } = render(<Header />)
    expect(container.textContent).toBe("User Registration")
})

it("renders <Header/> with a prop", () => {
    const title = "My Header"
    const { getByText } = render(<Header title={title} />)
    expect(getByText('My Header')).toBeTruthy()
})


it("matches snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
})
