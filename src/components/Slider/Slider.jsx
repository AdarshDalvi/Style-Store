import { useCallback, useEffect, useRef, useState } from 'react'
import './Slider.scss'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Banner() {

  const [currentIndex, setCurrentIndex] = useState(1)
  const timerRef = useRef(null)

  const slides = [
    {
      url: '/slider/slide-1.png',
      topText: 'Jordan Shoes',
      link: '2'
    },
    {
      url: '/slider/slide-2.jpg',
      topText: 'Stylish Sneakers',
      link: '3'
    },
    {
      url: '/slider/slide-3.png',
      topText: 'Running Shoes',
      link: '4'
    }
  ]

  const navigate = useNavigate()

  const navigateTo = (categoryId) => {
    const to = `/products/${categoryId}`
    navigate(to)
  }

  const element1 = (
    <div className="element1">
      <div className='element-container span2' onClick={() => navigateTo(slides[0].link)}>
        <img src={slides[0].url} alt="" />
        <div className='overlay'></div>
        <div className='image1-text'>
          <h1>{slides[0].topText}</h1>
          <p>shop now</p>
        </div>
      </div>
      <div className='element-container' onClick={() => navigateTo(slides[1].link)}>
        <img src={slides[1].url} alt="" />
        <div className='overlay'></div>
        <div className='image2-text'>
          <h1>{slides[1].topText}</h1>
          <p>shop now</p>
        </div>
      </div>
      <div className='element-container' onClick={() => navigateTo(slides[2].link)}>
        <img src={slides[2].url} alt="" />
        <div className='overlay'></div>
        <div className='image2-text'>
          <h1>{slides[2].topText}</h1>
          <p>shop now</p>
        </div>
      </div>
    </div>
  )

  const handleNext = useCallback((event, auto) => {
    if (auto) {
      event.stopPropagation()
    }
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex => newIndex);
  }, [currentIndex, slides]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      handleNext('', false)
    }, 3000)

    return () => clearTimeout(timerRef.current)
  }, [handleNext])


  function handlePrev(event) {
    event.stopPropagation()
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(prevIndex => newIndex);
  }

  return (
    <>
      {element1}
      <div className='slider' onClick={() => navigateTo(slides[currentIndex].link)}>
        <div className='overlay'></div>
        <GrFormPrevious className='nav-icons next' onClick={handlePrev} />
        <img src={slides[currentIndex].url} alt="" />
        <div className='slider-text'>
          <h1>{slides[currentIndex].topText}</h1>
          <p>shop now</p>
        </div>
        <GrFormNext className='nav-icons previous' onClick={(event) => handleNext(event, true)} />
      </div>
    </>
  )
}
