import React from 'react';

function Input({
    borderRadius,
    padding,
    margin,
    fontSize,
    width,
    height,
    border,
    boxShadow,
    color,
    backgroundColor,
    onChange,
    onFocus,
    onBlur
    ,className
}) {
    return (
        <input
            className={className}
            type="text"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            style={{
                borderRadius: borderRadius,
                padding: padding,
                margin: margin,
                fontSize: fontSize,
                width: width,
                height: height,
                border: border,
                boxShadow: boxShadow,
                color: color,
                backgroundColor: backgroundColor,
            }}
        />
    );
}

export default Input;
