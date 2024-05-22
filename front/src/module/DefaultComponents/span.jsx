import React from 'react';

function Span({
    text,
    fontSize,
    color,
    padding,
    margin,
    backgroundColor,
    textAlign,
    borderRadius,
    border,
    fontWeight,
    fontStyle,
    textDecoration,
    onClick,
    onMouseEnter,
    onMouseLeave,className
}) {
    return (
        <span
            className={className}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                fontSize: fontSize,
                color: color,
                padding: padding,
                margin: margin,
                backgroundColor: backgroundColor,
                textAlign: textAlign,
                borderRadius: borderRadius,
                border: border,
                fontWeight: fontWeight,
                fontStyle: fontStyle,
                textDecoration: textDecoration
            }}
        >
            {text}
        </span>
    );
}

export default Span;
