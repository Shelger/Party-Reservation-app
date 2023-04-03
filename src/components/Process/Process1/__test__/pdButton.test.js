import React from "react";
import PdButton from "../pdButton";
import TestRenderer from 'react-test-renderer'; 
import {cleanup} from "@testing-library/react";

afterEach(cleanup);

it("match ProcessDate", () => {
    const pdButton = TestRenderer.create(<PdButton />).toJSON();
    expect(pdButton).toMatchSnapshot();
})