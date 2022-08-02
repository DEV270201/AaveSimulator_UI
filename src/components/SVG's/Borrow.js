import React from "react";

const Borrow = ({ height, width, strokeColor }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.625 21v-1.125m0-4.5V14.25M6.375 21l3.375-3.375M6.375 3v18V3Zm0 18L3 17.625 6.375 21Zm11.25-18L21 6.375M17.625 9.75V3v6.75Zm0-6.75L14.25 6.375 17.625 3Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </>
    )
}

export default Borrow;