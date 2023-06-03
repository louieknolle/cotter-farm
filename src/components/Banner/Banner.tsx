import bannerImg from './media/fields-house-distance.jpeg'

const Banner = () => {
  return (
    <div
      className="flex justify-center items-center bg-cover h-[40rem] w-full pt-12"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex flex-col justify-center items-center text-white-white font-bold max-w-2xl w-full text-center">
        <h1 className="text-4xl">Cotter Farm CSA</h1>
        <h4 className="text-2xl">
          Chemical-free produce from our fields to your table.
        </h4>
      </div>
    </div>
  )
}

export default Banner
