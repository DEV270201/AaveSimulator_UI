import React from "react";

const Graph = ({height,width,strokeColor}) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.667 19.778V13.11a2.222 2.222 0 0 0-2.223-2.222H4.222A2.222 2.222 0 0 0 2 13.11v6.667A2.222 2.222 0 0 0 4.222 22h2.222a2.222 2.222 0 0 0 2.223-2.222Zm0 0V8.667a2.222 2.222 0 0 1 2.222-2.223h2.222a2.222 2.222 0 0 1 2.222 2.223v11.11m-6.666 0A2.222 2.222 0 0 0 10.889 22h2.222a2.222 2.222 0 0 0 2.222-2.222m0 0V4.222A2.222 2.222 0 0 1 17.556 2h2.222A2.222 2.222 0 0 1 22 4.222v15.556A2.222 2.222 0 0 1 19.778 22h-2.222a2.222 2.222 0 0 1-2.223-2.222Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </>
    )
}

export default Graph;