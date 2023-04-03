import React from "react";
import TimeAvailable from "../TimeAvailable";
import TestRenderer from 'react-test-renderer'; 
import {cleanup} from "@testing-library/react";

afterEach(cleanup);

it("match TimeAvailable", () => {
    const times = TestRenderer.create(<TimeAvailable weekday={1} />).toJSON();
    expect(times).toMatchSnapshot();
})