import React from 'react';
import {render} from '@testing-library/react';
import MissionsList from './MissionsList';

// Test 1
// First Test:

// Test that the component renders with empty props (when component mounts)
//   - props.error: ''
//   - prop.missions: []

test('renders without errors', () => {
    const {} = render(<MissionsList missions={[]} errors='this is a string'/>);
});

test('renders error message if error is present', () => {
    render(<MissionsList missions={[]} errors="" />);
});