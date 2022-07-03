import React from 'react'
import { Rings, Oval } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const RingLoader = () => {
    const myStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "5rem auto",
        color: "#45bd52",
        width: "100%"
    }
    return (
        <div style={myStyles}>
            <Rings
                ariaLabel="loading-indicator"
                height={60}
                width={60}
                color="#45bd52"
            />
            <h5 style={{margin: '8px auto auto auto'}}>loading...</h5>
        </div>
    )
}

export const SpinLoader = () => {
    const myStyles = {
        display: "flex",
        justifyContent: "center",
        alignItem: 'center',
        width: "100%",
        fontSize: '.7rem'
    }
    return (
        <div style={myStyles}>
            <Oval
                ariaLabel="loading-indicator"
                height={20}
                width={20}
                strokeWidth={4}
                color="#45bd52"
                secondaryColor="white"
            />
            <p style={{margin: 'auto 0 auto 5px'}}>Please wait ...</p>
        </div>
    )
}