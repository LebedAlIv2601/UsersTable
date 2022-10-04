import React from 'react';

const LoadingIndicator = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 100}}><i
            className="pi pi-spin pi-spinner" style={{'fontSize': '2em'}}></i>
        </div>
    );
};

export default LoadingIndicator;