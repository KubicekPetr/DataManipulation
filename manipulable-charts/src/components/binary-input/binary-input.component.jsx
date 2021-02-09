import React from 'react';

const BinaryInput = ({name, value, onKeyDown, onKeyUp, onChange}) => (
    <div>
        <input
            style={{ fontSize: '55px' }}
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
        />
    </div>
);

export default BinaryInput;