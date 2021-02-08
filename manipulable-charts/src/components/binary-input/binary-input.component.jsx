import React from 'react';

const BinaryInput = ({name, value, onKeyDown, onKeyUp}) => (
    <div>
        <input
            style={{ fontSize: '55px' }}
            type="text"
            name={name}
            value={value}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
        />
    </div>
);

export default BinaryInput;