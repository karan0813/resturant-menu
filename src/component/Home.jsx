import React, { useState } from 'react'
import "./home.css"

const Home = () => {
    const [input1, setinput1] = useState()
    const [input2, setinput2] = useState()
    const [input3, setinput3] = useState()

    const [added, setadded] = useState(0)

    const addfirst = (e) => {
        setinput1(e.target.value)
    }
    const addsecund = (e) => {
        setinput2(e.target.value)
    }
    const addthired = (e) => {
        setinput3(e.target.value)
    }

    const AddAll = () => {
        let tottle = Number(input1) + Number(input2) + Number(input3);
        setadded(tottle)
        setinput1("")
        setinput2("")
        setinput3("")
        setTimeout(() => {
            setadded("")
        }, [10000])


    }
    return (
        <>
            <div className=" container border-1 shadow ">
                <div className="row justify-content-center py-4 ">
                    <div className="col-6 d-flex flex-column  ">
                        <input type="number" placeholder='Enter 1 num' className='mt-4' value={input1} onChange={addfirst} />
                        <input type="number" placeholder='Enter 2 num' className='mt-4' value={input2} onChange={addsecund} />
                        <input type="number" placeholder='Enter 3 num' className='mt-4' value={input3} onChange={addthired} />
                        <div className="totle col-3  px-5  mt-4"> Rs:{added}</div>
                        <div className="col-3  pt-3">
                            <button className='btn btn-outline-primary w-2 ' onClick={AddAll}>
                                Add
                            </button>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default Home
