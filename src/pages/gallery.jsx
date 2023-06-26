import React, { useEffect, useState } from "react";
import '../pages/gallery.css';
import {  FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleChevronLeft,
    faCircleXmark,
    faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons'



const Gallery = ({galleryPhotos})=>{

    const [slideNumber , setSlideNumvber] = useState(0)
    const [openModal , setOpenModal] = useState(false)

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const handleOpen =(index) =>{
        setSlideNumvber(index)
        setOpenModal(true)
    }


    const handleClose = () => {
        setOpenModal(false)
    }
    // prv imagey
    
    const handleLeft = () => {
        slideNumber === 0 ? setSlideNumvber(galleryPhotos.length -1 ) : setSlideNumvber( slideNumber -1)
    }
    // next line
    const handleRight = () => {
        slideNumber + 1 === galleryPhotos.length ? setSlideNumvber(0) : setSlideNumvber (slideNumber +1)
    }
    return(
        <div className="oneTwo">
            {openModal && 
                <div className="slideWrap">
                    <FontAwesomeIcon icon={faCircleXmark}  className='btnClose' onClick={handleClose} />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className='btnLeft' onClick={handleLeft} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className='btnRight' onClick={handleRight} />
                    <div className="fullScreen">
                        <img src={galleryPhotos[slideNumber].img} alt="" />
                    </div>
                </div>
            } 

            <div className="galleryWrap">
                <h1>Gallery</h1>
                {
                    galleryPhotos && galleryPhotos.map((slide , index)=>{
                        return(
                            <div className="single" key={index} onClick={()=> handleOpen(index)}>
                                <img src={slide.img} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery;