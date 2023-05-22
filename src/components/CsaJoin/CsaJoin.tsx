import bioPhoto from './media/mike-yams.jpg'

const CsaJoin = () => {
  return (
    <div className="flex flex-col items-center w-3/4 bg-white m-auto p-4">
      <h6 className="text-xl font-semibold text-gray-800 p-2">CSA</h6>
      <h6 className="text-xl font-semibold text-gray-800 p-2"></h6>
      <div className="flex flex-col justify-center items-center mt-6">
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          sapien vel bibendum bibendum, velit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed euismod, sapien vel bibendum
          bibendum, velit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed euismod, sapien vel bibendum bibendum, velit.
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          sapien vel bibendum bibendum, velit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed euismod, sapien vel bibendum
          bibendum, velit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed euismod, sapien vel bibendum bibendum, velit.
        </p>
      </div>
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
    </div>
  )
}

export default CsaJoin
