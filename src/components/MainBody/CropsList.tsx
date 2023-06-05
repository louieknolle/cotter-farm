import React from 'react'

const CropList = () => {
  const crops = [
    'Arugula',
    'tatsoi',
    'mizuna',
    'Beets',
    'broccoli',
    'snap pea shoots',
    'sweet corn',
    'Brussels sprouts',
    'green beans',
    'sweet potatoes',
    'kohlrabi',
    'tomatoes',
    'Cherry tomatoes',
    'carrots',
    'daikons',
    'radishes',
    'lettuce',
    'winter squash',
    'spinach',
    'pumpkins',
    'cabbage',
    'peppers',
    'chard',
    'eggplant',
    'kale',
    'summer squash',
    'zucchini',
    'cucumbers',
    'onions',
    'garlic',
    'turnips',
    'watermelon',
    'normal melons'
  ]

  return (
    <div className="w-3/4 mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold mb-4 text-left">Our Crops</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {crops.map((crop, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-md text-center"
          >
            <p>{crop}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CropList
