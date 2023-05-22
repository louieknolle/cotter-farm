import bioPhoto from './media/mike-yams.jpg'

const AboutBio = () => {
  return (
    <div className="flex flex-col items-center w-3/4 bg-white m-auto p-4">
      <h6 className="text-xl font-semibold text-gray-800 p-2">
        Chemical-free produce from our fields to your table.
      </h6>
      <h6 className="text-xl font-semibold text-gray-800 p-2">
        Pasture-raised pork available seasonally.
      </h6>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
        <img
          className="h-28 w-auto"
          src="https://via.placeholder.com/150"
          alt="placeholder"
        />
        <img
          className="h-28 w-auto"
          src="https://via.placeholder.com/150"
          alt="placeholder"
        />
        <img
          className="h-28 w-auto"
          src="https://via.placeholder.com/150"
          alt="placeholder"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center mt-10">
        <img
          src={bioPhoto}
          alt="farmer Mike holding yams fresh from the soil"
          className="w-1/2 sm:w-1/4 h-auto object-cover"
        />
        <p className="ml-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          sapien vel bibendum bibendum, velit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed euismod, sapien vel bibendum
          bibendum, velit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed euismod, sapien vel bibendum bibendum, velit.
        </p>
      </div>
    </div>
  )
}

export default AboutBio
