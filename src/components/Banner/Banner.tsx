import bannerImg from './media/fields-house-distance.jpeg'

const Banner = () => {
  return (
    <div
      className="flex justify-center items-start bg-cover h-[30rem]"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="flex flex-col justify-center items-center mt-5">
        <h1 className="text-4xl">Cotter Farm CSA</h1>
        <h4 className="text-2xl">
          Chemical-free produce from our fields to your table.
        </h4>
      </div>
    </div>
  )
}

export default Banner
