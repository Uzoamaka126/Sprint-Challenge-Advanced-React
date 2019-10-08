import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import NavBar from '../Navbar';

let tools;

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<NavBar className="toggle" />);
});

describe('NavBar Component', () => {
    it('can debug the output', () => {
        tools.debug();
    });

    it('should have a toggle option for different display modes', () => {
        const navbarButton = tools.querybyTestId('navButton');

        rtl.fireEvent.click(navbarButton);
        expect(navbarButton).toBeInTheDocument();
        // expect(tools.querybyText(/toggled/)).toBeInTheDocument();
    })
})