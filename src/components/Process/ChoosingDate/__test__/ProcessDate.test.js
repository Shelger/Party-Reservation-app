import React from "react";
import DatePicker from "../DatePicker";
import TestRenderer from 'react-test-renderer'; 
import {cleanup} from "@testing-library/react";

afterEach(cleanup);

it("match ProcessDate", () => {
    const datePicker = TestRenderer.create(<DatePicker />).toJSON();
    expect(datePicker).toMatchSnapshot();
})