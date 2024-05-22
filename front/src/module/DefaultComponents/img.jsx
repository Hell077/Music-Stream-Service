import React from 'react';

function Img({
    src,
    alt,
    width,
    height,
    borderRadius,
    border,
    boxShadow,
    margin,
    padding,
    display,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onLoad,
    onError
    , className
}) {
    return (
        <img
            className={className}
            src={src}
            alt={alt}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onLoad={onLoad}
            onError={onError}
            style={{
                width: width,
                height: height,
                borderRadius: borderRadius,
                border: border,
                boxShadow: boxShadow,
                margin: margin,
                padding: padding,
                display: display,
            }}
        />
    );
}

export default Img;
