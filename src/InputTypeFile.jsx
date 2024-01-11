import React, { useState } from 'react'

const InputTypeFile = () => {
    const [image, setImage] = useState([
        {
            img: "./Images/Group1.png"
        },
        {
            img: "./Images/Group1.png"
        },
        {
            img: "./Images/Group1.png"
        },
        {
            img: "./Images/Group1.png"
        },
    ])
    const handelImageChange = (e, index) => {
        console.log(e.target.files);
        // console.log(image[index]);
        // console.log(URL.createObjectURL(e.target.files[index]));
        const newValue=URL.createObjectURL(e.target.files[0])
        // console.log(image);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        setImage((prevArr)=>{
            prevArr.map((item,eleIndex)=>{
                    eleIndex===index ?{...item,img:newValue}: item
                    // eleIndex===index ? 
            })
        })
        console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
        // console.log(image);
    }
    return (
        <>
            <div className="imageBox">
                <div className='imgDiv'>
                    {
                        Array.from({ length: 4 }).map((image1,index) => {
                            return (
                                <label key={index} for="inputTag">

                                    <img src={image1.img} alt="" />
                                    <input
                                        onChange={(e) => handelImageChange(e, index)}
                                        id="inputTag"
                                        type="file" />
                                    <br />
                                    {/* <span id="imageName"></span> */}
                                </label>
                            )

                        })
                    }
                </div>
            </div>

        </>
    )
}

export default InputTypeFile