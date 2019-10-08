import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import * as rtl from '@testing-library/react';
import SinglePlayer from '../SinglePlayer';

let tools;

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<SinglePlayer player={{ name: 'Test-name', country: 'test-country', searches: 34 }} />);
});

describe('Single Player Card Component', () => {
    it('can debug the output', () => {
        tools.debug();
    });

    it('shows each user', () => {
        const getElement = tools.rtl.queryByText(/test-name/i);
        expect(getElement).toBeInTheDocument();
    });
});