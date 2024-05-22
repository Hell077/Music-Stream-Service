import React from 'react';

function Button({
    text,
    color,
    borderRadius,
    backgroundColor,
    padding,
    margin,
    fontSize,
    width,
    height,
    border,
    boxShadow,
    onClick,
    onMouseEnter,
    onMouseLeave,
    className
}) {
    return (
        <button
            className={className}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                color: color,
                borderRadius: borderRadius,
                backgroundColor: backgroundColor,
                padding: padding,
                margin: margin,
                fontSize: fontSize,
                width: width,
                height: height,
                border: border,
                boxShadow: boxShadow,
            }}
        >
            {text}
        </button>
    );
}

export default Button;
