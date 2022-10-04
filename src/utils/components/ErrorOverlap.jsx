import React from 'react';
import {Button} from "primereact/button";

const ErrorOverlap = ({retry}) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: "center",
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: 100
        }}>
            <h1>Что-то пошло не так!</h1>
            <Button style={{marginTop: 50}} onClick={() => retry()}>Обновить</Button>
        </div>
    );
};

export default ErrorOverlap;