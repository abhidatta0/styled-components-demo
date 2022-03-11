import React from 'react';
import {useTheme} from 'styled-components';

const ViewTheme  = ()=>{
    const theme  = useTheme();
    return (
        <h1>Current Theme: {JSON.stringify(theme)}</h1>
    )
}

export default ViewTheme;