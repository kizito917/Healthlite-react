import React from 'react';
import Alert from '@mui/material/Alert';

function AlertComponent(props) {
    return (
        <>
            <div>
                <Alert severity={props.type}>{props.text}</Alert>
            </div>
        </>
    )
}

export default AlertComponent;