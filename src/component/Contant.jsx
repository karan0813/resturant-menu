import React from 'react'

const Contant = ({ img, price, tittle }) => {
    return (
        <>
            <div className="container mt-4 shadow-sm rounded-3">
                <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4 ">
                            <img src={img} class="img-fluid  rounded-start " alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title ">{tittle}<span className="badge bg-primary m-1">New</span></h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p><span className='text-muted mr-1'>Rs{price}/-</span>

                                <button className="btn btn-outline-danger ">Order Now</button>
                                <button className="btn btn-outline-danger ml-1 likebutton">Like</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contant
