import React from 'react'
import "./info.css"

const Info = () => {
    return (
        <div className="container-fluid app">
            <div className="col-md-12 p-5   ">
                <h1 className=' mt-5 text-light'>Welcome To FastFood</h1>

                <button class="learn-more mt-3">
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Learn More</span>
                </button>
            </div>
        </div>
    )
}

export default Info
