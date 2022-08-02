import React from "react";

const Wallet = ({height,width,strokeColor}) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 17.398H3a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z" stroke={strokeColor} strokeWidth="1.5"></path>
                <path d="M14.5 11.398a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M16 4.398V3a2 2 0 0 0-2.515-1.932l-11 2.933A2 2 0 0 0 1 5.934v.464" stroke={strokeColor} strokeWidth="1.5"></path>
            </svg>
        </>
    )
}

export default Wallet;