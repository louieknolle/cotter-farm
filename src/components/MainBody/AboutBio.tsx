import Banner from 'components/Banner/Banner'
import bioPhoto from './media/mike-yams.jpg'
import Feed from './FbFeed'

const AboutBio = () => {
  return (
    <>
      <Banner />
      <div className="flex flex-col items-center w-3/4 mx-auto p-4">
        <h6 className="text-xl font-semibold text-gray-800 p-2">
          Chemical-free produce from our fields to your table.
        </h6>
        <h6 className="text-xl font-semibold text-gray-800 p-2">
          Pasture-raised pork available seasonally.
        </h6>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 max-w-2xl">
          <img
            src={bioPhoto}
            alt="farmer Mike holding yams fresh from the soil"
            className="w-1/2 md:w-1/4 h-auto object-cover"
          />
          <p className="ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, sapien vel bibendum bibendum, velit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum
            bibendum, velit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed euismod, sapien vel bibendum bibendum, velit.
          </p>
          <Feed />
        </div>
      </div>
    </>
  )
}

export default AboutBio
