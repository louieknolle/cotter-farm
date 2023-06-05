import React, { useState, useEffect } from 'react'
import backgroundImage from './media/produce.jpeg'

const BannerCarousel = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  const quotes = [
    '"We love the produce Mike and Sarah provide. It is always fresh and delicious." - The Smiths',
    '"Mike and Sarah are great people and we love supporting their farm." - The Jones',
    '"Getting fresh produce every week is so convenient and we love the variety." - The Johnsons',
    '"We have been members for 3 years and we love it!" - The Williams'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [quotes.length])

  return (
    <div
      className="w-full h-36 flex justify-center bg-cover bg-center text-white text-2xl my-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <p className="text-white-white text-center font-bold">
        {quotes[currentQuoteIndex]}
      </p>
    </div>
  )
}

export default BannerCarousel
