import React from 'react';
import classNames from 'classnames';

import "./CustomButton.scss"

const CustomButton = ({ onClick, text, label, variant = "contained", color = "primary", fullWidth = false }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (<div className={classNames('btn-container',fullWidth ? 'full-width' : '')}>
        <button 
            className={classNames(
                'btn', 
                variant === 'contained' ? 'btn-contained' : 'btn-outlined', 
                fullWidth ? 'full-width' : '',
                color === 'primary' ? 'color-primary' : 'color-secondary'
            )}
            onClick={handleClick}>
                {text}
        </button>
        {label &&<span className='btn-label'>{label}</span>}
    </div>);
};

export default CustomButton;