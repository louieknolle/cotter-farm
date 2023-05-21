import bannerImg from './media/fields-house-distance.jpeg'

const Banner = () => {
  return (
    <div className="flex justify-center">
      <img
        className="w-full h-64 object-cover"
        src={bannerImg}
        alt="panorama of farm fields and house in the distance"
      />
    </div>
  )
}

export default Banner
