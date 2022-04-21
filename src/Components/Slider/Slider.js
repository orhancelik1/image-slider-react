import React, {useState} from "react";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider"
import "./Slider.css";

export default function Slider(){

    const[slidenIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slidenIndex !== dataSlider.length){
            setSlideIndex(slidenIndex+1)
        }
        else if(slidenIndex === dataSlider.length){
            setSlideIndex(1);
        }
    }
    const prevSlide = () => {
        if(slidenIndex !== 1){
            setSlideIndex(slidenIndex-1)
        }
        else if(slidenIndex === 1){
            setSlideIndex(dataSlider.length);
        }
        
    }

    const moveDot = index => {
        setSlideIndex(index)
    }


    return(
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return(
                    <div 
                        className={slidenIndex === index + 1 ? "slide active-anim" : "slide"}
                        key={obj.id}>
                        <img
                        src={process.env.PUBLIC_URL + `/Imgs/img${index+1}.jpg`}
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item,index)=>(
                    <div 
                    onClick={()=> moveDot(index+1)}
                    className={slidenIndex===index+1 ? "dot active" : "dot"}>

                    </div>
                ))}
            </div>

        </div>
    )
}