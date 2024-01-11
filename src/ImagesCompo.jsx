import React, { useState } from 'react'
import ImageUploading from "react-images-uploading";

const ImagesCompo = () => {
    const arr=[
        {
            data_url: './Images/Group1.png', // Replace with the URL of your default image
          },
          {
            data_url: './Images/Group1.png', // Replace with the URL of your default image
          },
          {
            data_url: './Images/Group1.png', // Replace with the URL of your default image
          },
          {
            data_url: './Images/Group1.png', // Replace with the URL of your default image
          },
    ]
    const [arrcount,setArrCount]=useState(4)
    const [images, setImages] = useState(arr);
    const maxNumber = images.length;
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
  return (
    <>
    <div className="imageBox">

    <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
     
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            
            
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img  onClick={() => onImageUpdate(index)}  src={image.data_url} alt="" width="150" />
                
              </div>
            ))}
            
      
          </div>

        )}

      </ImageUploading>
      
    </div>
                <button onClick={()=>{
                   setImages((prevData)=>{
                    // prevData.push({data_url: './Images/Group1.png'})
                    // console.log();
                    return [...prevData,{data_url: './Images/Group1.png'}]
                    
                   })
                }}>ADD image</button>
    </>
  )
}

export default ImagesCompo