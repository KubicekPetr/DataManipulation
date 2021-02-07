import React from 'react';

const Prompter = ({ sequence, position }) => (
    <div style={{ fontSize: '38px' }}>
        {
            Array.from(sequence).map((char, idx) =>
                <span style={{ color: idx === position ? '#fff' : '#329ce4' }}>{char}</span>)
        }
    </div>
);

export default Prompter;