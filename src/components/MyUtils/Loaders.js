import React from 'react'
import { Rings, Oval } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const RingLoader = () => {
    const myStyles = {
        display: "flex",
        justifyContent: "center",
        margin: "5rem auto",
        width: "100%"
    }
    return (
        <div style={myStyles}>
            <Rings
                ariaLabel="loading-indicator"
                height={80}
                width={80}
                color="#45bd52"
            />
            {/* <h1>loading</h1> */}
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