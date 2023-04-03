import React from 'react';
import ReactDom from 'react-dom';
import NextButtton from './nextButton';
import {cleanup, render} from '@testing-library/react';
import "@testing-library/jest-dom";

afterEach(cleanup);
it("renders nextButton successfully", () => {
    const {getByTestId} = render(<NextButtton word="PAY"></NextButtton>);
    expect(getByTestId('nb')).toHaveTextContent("PAY");
})