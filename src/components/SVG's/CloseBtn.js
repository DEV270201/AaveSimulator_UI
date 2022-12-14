import React from "react";

const CloseBtn = ({ height, width, strokeColor }) => {
    return (
        <>
            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8fuleg" height={height} width={width} focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke={strokeColor} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </svg>
        </>
    )
}

export default CloseBtn;