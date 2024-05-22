function Paragraph({
    text,
    fontSize,
    lineHeight,
    margin,
    color,
    padding,
    backgroundColor,
    textAlign,
    borderRadius,
    border,
    onClick,
    onMouseEnter,
    onMouseLeave
    ,className
}) {
    return (
        <p
            className={className}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                fontSize: fontSize,
                lineHeight: lineHeight,
                margin: margin,
                color: color,
                padding: padding,
                backgroundColor: backgroundColor,
                textAlign: textAlign,
                borderRadius: borderRadius,
                border: border
            }}
        >
            {text}
        </p>
    );
}

export default Paragraph;
