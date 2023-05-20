import Avatar from 'components/Avatar'

function App() {
  return (
    <div className="flex flex-col items-center sm:flex-row">
      <div className="flex flex-col items-center justify-center h-3/4 sm:h-screen w-full sm:w-1/2 p-2">
        <div className="header flex flex-col justify-center items-center">
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <img
              className="mx-auto h-48 w-auto"
              src="https://drive.google.com/uc?export=view&id=1gSMyNMaDBgDOGyTg3FhXlW5ccylrzzvJ"
              alt="Cotter Farm logo"
            />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Cotter Farm
              </h1>
              <p className="text-sm font-bold tracking-tight text-gray-900 sm:text-xl">
                Batavia, OH
              </p>
              <p className="font-bold tracking-tight text-gray-900 sm:text-xl text-sm">
                513-555-5555
              </p>
            </div>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            Chemical-free produce from our farm to your table.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Pasture-raised pork available seasonally.
          </p>
        </div>
        <div className="csa-info w-full flex flex-col items-center mt-10">
          <p className="text-2xl font-bold text-gray-900 sm:text-4xl my-5">
            Join as a CSA member!
          </p>
          <ul>
            <li className="text-xl text-gray-500">🍃25 weeks of produce</li>
            <li className="text-xl text-gray-500">🍃June - November</li>
            <li className="text-xl text-gray-500">🍃Full share: $400</li>
            <li className="text-xl text-gray-500">
              🍃Pick up on farm or local delivery options
            </li>
            <li className="text-xl text-gray-500">
              🍃Wide variety of seasonal produce
            </li>
          </ul>
        </div>
      </div>
      <div className="h-3/4 sm:h-screen w-3/5 sm:w-1/2 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 gap-4 place-content-center sm:grid-cols-2">
          <img src="https://drive.google.com/uc?export=view&id=1gSMyNMaDBgDOGyTg3FhXlW5ccylrzzvJ" />
          <img src="https://drive.google.com/uc?export=view&id=1gSMyNMaDBgDOGyTg3FhXlW5ccylrzzvJ" />
          <img src="https://drive.google.com/uc?export=view&id=1gSMyNMaDBgDOGyTg3FhXlW5ccylrzzvJ" />
          <img src="https://drive.google.com/uc?export=view&id=1gSMyNMaDBgDOGyTg3FhXlW5ccylrzzvJ" />
        </div>
      </div>
    </div>
  )
}

export default App
