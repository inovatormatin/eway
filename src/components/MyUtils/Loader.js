import React from 'react'
import { Rings } from  'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {
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

export default Loader;