import React from "react";
import Context from "../context";
import TestRenderer from 'react-test-renderer'; 
import {cleanup} from "@testing-library/react";

afterEach(cleanup);

it("match ProcessDate", () => {
    const context = TestRenderer.create(<Context title = "aloha" regular_price = {1} num_player = {1} additional_price = {1} limit_player = {1} description = "aloha" />).toJSON();
    expect(context).toMatchSnapshot();
})