import React from 'react';
import classNames from 'classnames';

import "./CustomButton.scss"

const CustomButton = ({ onClick, text, variant = "contained", fullWidth = true }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (<>
        <button 
            className={classNames('btn', variant === 'contained' ? 'btn-contained' : 'btn-outlined', fullWidth ? 'full-width' : '')}
            onClick={handleClick}>
                {text}
        </button>
    </>);
};

export default CustomButton;