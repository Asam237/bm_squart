import React from "react";

const TEXT_STYLE = {
    title: "title",
    subTitle: "subTitle"
}

const changeByVariant = (variant: any) => {
    if (variant === TEXT_STYLE.title) {
        return styles.title
    }
    if (variant === TEXT_STYLE.subTitle) {
        return styles.subTitle
    }
}

export const MyText = (props: any) => {
    const myStyle = changeByVariant(props.variant)
    return <p className={`${props.myTextColor} ${props.textUppercase} ${props.paddingVertical} ${props.lineHeight} ${props.myTextAlign}`} style={myStyle}>{props.myText}</p>
}

const styles = {
    title: {
        fontSize: '30px',
        fontWeight: '800',
        fontFamily: " 'Varela Round', sans-serif"
    },
    subTitle: {
        fontSize: '18px',
        fontFamily: " 'Varela Round', sans-serif"
    }
}