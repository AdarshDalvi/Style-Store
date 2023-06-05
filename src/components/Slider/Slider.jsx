import {useCallback, useEffect, useRef, useState } from 'react'
import './Slider.scss'
import  {GrFormPrevious, GrFormNext} from 'react-icons/gr'

export default function Banner() {

  const [currentIndex, setCurrentIndex] = useState(1) 
  const timerRef = useRef(null)

  const slides = [
    { 
      url: '/images/slider/image02.webp',
      topText: 'Stylish shoes for Women'
    },
    { 
      url: '/images/slider/image01.webp',
      topText: 'Sports Wear'
    },
    { 
      url: '/images/slider/image3.jpg',
      topText: 'Fashion Shoes'
    }
  ]

  const element1 = (
    <div className="element1">
      <div className='element-container span2'>
        <img src={slides[0].url} alt="" />
        <div className='overlay'></div>
        <div className='image1-text'>
          <h1>Stylish Shoes for <br /> Women</h1>
          <p>shop now</p>
        </div>
      </div>
      <div className='element-container'>
        <img src={slides[1].url} alt="" />
        <div className='overlay'></div>
        <div className='image2-text'>
        <h1>Sports Wear</h1>
          <p>shop now</p>
        </div>
      </div>
      <div className='element-container'>
        <img src={slides[2].url} alt="" />
        <div className='overlay'></div>
        <div className='image2-text'>
          <h1>Fashion Shoes</h1>
          <p>shop now</p>
        </div>
      </div>
    </div>
  )
  
  const  handleNext = useCallback(()=>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex=>newIndex);
  },[currentIndex,slides]);

  useEffect(()=>{
    if(timerRef.current){
      clearTimeout(timerRef.current)
    }
    timerRef.current =  setTimeout(()=>{
      handleNext()
    },3000)

    return ()=> clearTimeout(timerRef.current)
  },[handleNext])


  function handlePrev(){
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(prevIndex=>newIndex);
  }

  return (
    <>
      {element1}
      <div>
        <div className='slider'>
          <div className='overlay'></div>
          <GrFormPrevious className='nav-icons next' onClick={handleNext}/>
          <img src={slides[currentIndex].url} alt="" />
          <div className='slider-text'>
            <h1>{slides[currentIndex].topText}</h1>
            <p>shop now</p>
          </div>
          <GrFormNext className='nav-icons previous' onClick={handlePrev}/>
        </div>
      </div>
    </>
  )
}
