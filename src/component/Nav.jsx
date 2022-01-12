import React from 'react'
import "./nav.css"

const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light nav-bg">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img className='img-thumbnail img-custom' src='https://www.pngall.com/wp-content/uploads/8/4G-Logo-PNG.png' alt='' />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end mx-4" id="navbarNav">
                        <ul class="navbar-nav jus">
                            <li class="nav-item">
                                <a class="nav-link active text-dark nav-tag" aria-current="page" href="#"><button className='button'> Home
                                </button></a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-dark nav-tag" href="#"><button className='button'>About-Us
                                </button></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark nav-tag" href="#"><button className='button'> Contct-Us
                                </button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
