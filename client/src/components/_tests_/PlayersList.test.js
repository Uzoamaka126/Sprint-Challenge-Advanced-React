import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import * as rtl from '@testing-library/react';
import PlayersList from '../PlayersList';

let tools;

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<PlayersList player="amaka" />);
});

describe('Players List Component', () => {
    it('can debug the output', () => {
        tools.debug();
    });

    it('receives data as props', () => {
        
    })
})